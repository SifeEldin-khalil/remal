import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
   this.jQueryHeaderShrink();
  }

  jQueryHeaderShrink(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('white');
        $('nav').removeClass('shrink');
      } else {
        $('nav').removeClass('white');
        $('nav').addClass('shrink');
      }
      console.log( $('nav').classList);
    });
  }

}
