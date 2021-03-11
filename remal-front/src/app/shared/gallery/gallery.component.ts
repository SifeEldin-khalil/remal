import { Component, OnInit } from '@angular/core';
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
  galleryImages: NgxGalleryImage[];

  constructor() { }

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

    this.galleryImages = [
      {
        small: 'assets/img/food&beverage/1.png',
        medium: 'assets/img/food&beverage/1.png',
        big: 'assets/img/food&beverage/1.png'
      },
      {
        small: 'assets/img/food&beverage/2.png',
        medium: 'assets/img/food&beverage/2.png',
        big: 'assets/img/food&beverage/2.png'
      },
      {
        small: 'assets/img/food&beverage/3.png',
        medium: 'assets/img/food&beverage/3.png',
        big: 'assets/img/food&beverage/3.png'
      },{
        small: 'assets/img/food&beverage/4.png',
        medium: 'assets/img/food&beverage/4.png',
        big: 'assets/img/food&beverage/4.png'
      },
      {
        small: 'assets/img/food&beverage/5.png',
        medium: 'assets/img/food&beverage/5.png',
        big: 'assets/img/food&beverage/5.png'
      },
      {
        small: 'assets/img/food&beverage/3.png',
        medium: 'assets/img/food&beverage/3.png',
        big: 'assets/img/food&beverage/3.png'
       },
       {
          small: 'assets/img/food&beverage/1.png',
          medium: 'assets/img/food&beverage/1.png',
          big: 'assets/img/food&beverage/1.png'
        }
    ];
  }
}
