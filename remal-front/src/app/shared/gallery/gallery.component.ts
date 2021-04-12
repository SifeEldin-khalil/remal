import { Component, Input, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { Item } from 'src/app/features/models/item.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  @Input() images: Item[];
  galleryImages:NgxGalleryImage[]=[];
  constructor() { 
  }

  ngOnInit() {
   
  }

  ngOnChanges() {
    this.galleryOptions = [
      {
        width: '80%',
        height: '800px',
        thumbnailsColumns: 4,
        thumbnailsRows:1,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    if(this.images!=undefined){
      for(var i of this.images){
        this.galleryImages.push(
          {
            small:this.getImagePath(i.path),
            medium:this.getImagePath(i.path),
            big:this.getImagePath(i.path),
            description:i.title
            
          }
        );
      }
    }
    
}
  
  getImagePath(relativePath:string){
    return environment.apiUrlImage+relativePath;
  }


}
