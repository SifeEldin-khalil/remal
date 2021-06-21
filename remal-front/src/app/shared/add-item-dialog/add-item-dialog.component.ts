import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categories } from 'src/app/core/enums/categories.enum';
import { Messages } from 'src/app/core/enums/messages.enum';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent implements OnInit {
  fileToUpload:File;
  itemForm: FormGroup;
  constructor(
    private toastService:ToastService,
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.initForm();
  }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close({code:'002'});
  }
  onOkClick() {
    console.log(this.itemForm.getRawValue());
    if(this.fileToUpload!=null){
      this.dialogRef.close({code:'001',itemData:this.itemForm.getRawValue(),file:this.fileToUpload});
    }else{
      this.toastService.error(Messages.ERROR_UPLOAD_FILE_REQUIRED);
    }
  }

  initForm(){
    this.itemForm = this.formBuilder.group({
      title:[''],
      desc:[''],
      category:[''],
    });
  }

  handleFileInput(event) {
    var files: FileList=event.target.files;
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toastService.error(Messages.ERROR_UPLOAD_FILE_INVALID);  
      event.target.value=null;  
      return;
    }
    this.fileToUpload=files.item(0);
  }
  
  public get Categories(): typeof Categories {
    return Categories; 
  }
}

