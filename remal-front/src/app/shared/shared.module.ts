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
import { MDBBootstrapModule, TableModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';

// gallery component
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { HttpClientModule} from '@angular/common/http';
import { CareerCardComponent } from './career-card/career-card.component';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';


import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from'@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputTextModule } from 'primeng/inputtext';






@NgModule({
  declarations: [CompanyCardComponent, ContactFormComponent, SliderComponent, GalleryComponent, CareerCardComponent, AddItemDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    NgxGalleryModule,
    HttpClientModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    // MatTableModule,
    // MatIconModule,
    // MatBadgeModule,
    // MatSlideToggleModule,
    // MatMenuModule
  ],
  exports: [
    CompanyCardComponent,
    ContactFormComponent,
    SliderComponent,
    GalleryComponent,
    CareerCardComponent,
    AddItemDialogComponent,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    // MatFormFieldModule,
    MatButtonModule,
    // MatTableModule,
    // MatIconModule,
    // MatBadgeModule,
    // MatSlideToggleModule,
    // MatMenuModule
  ],
  providers: [ CompanyCardComponent ],

})
export class SharedModule { }
