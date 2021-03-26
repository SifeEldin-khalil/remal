import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstClassComponent } from './first-class.component';

describe('FirstClassComponent', () => {
  let component: FirstClassComponent;
  let fixture: ComponentFixture<FirstClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
