import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flagAdmin:boolean=false;
  constructor(private authService:AuthService) { }

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
    });

    this.authService.changeToken.subscribe(()=>{
      if(sessionStorage.getItem("token")!=null){
        this.flagAdmin=true;
      }
      else{
        this.flagAdmin=false;
      }
    })
  }

  signout(){
    this.authService.SignOut();    
  }

}
