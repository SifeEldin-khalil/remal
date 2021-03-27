import { Component, Input, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  @Input() images: string[];
  galleryImages:NgxGalleryImage[]=[];
  constructor() { 
  }

  ngOnInit() {
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

    for(var i of this.images){
      this.galleryImages.push(
        {
          small:i,
          medium:i,
          big:i
        }
      );
    }
   
  }

}
