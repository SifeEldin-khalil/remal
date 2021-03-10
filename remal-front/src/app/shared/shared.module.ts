import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// card component
import { CompanyCardComponent } from './company-card/company-card.component';

// contact form component
import { ContactFormComponent } from './contact-form/contact-form.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

// slider component
import { SliderComponent } from './slider/slider.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';

// gallery component
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [CompanyCardComponent, ContactFormComponent, SliderComponent, GalleryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    NgxGalleryModule,
    HttpClientModule
  ],
  exports: [
    CompanyCardComponent,
    ContactFormComponent,
    SliderComponent,
    GalleryComponent
  ],
  providers: [ CompanyCardComponent ],

})
export class SharedModule { }
