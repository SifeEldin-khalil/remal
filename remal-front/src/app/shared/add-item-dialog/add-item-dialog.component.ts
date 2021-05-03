import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categories } from 'src/app/core/enums/categories.enum';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent implements OnInit {
  fileToUpload:File;
  itemForm: FormGroup;
  constructor(
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
    this.dialogRef.close({code:'001',itemData:this.itemForm.getRawValue(),file:this.fileToUpload});
  }

  initForm(){
    this.itemForm = this.formBuilder.group({
      title:['',[Validators.required]],
      desc:[''],
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload=files.item(0);
  }
  
  public get Categories(): typeof Categories {
    return Categories; 
  }
}

