import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'remal-front';
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
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
