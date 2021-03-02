import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent implements OnInit {
  
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  constructor() { }

  ngOnInit(): void {
  }
   // Move to specific slide
   navigateToSlide(item) {
    this.ngCarousel.select(item);
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }

  
}
