import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEgComponent } from './projects-eg.component';

describe('ProjectsEgComponent', () => {
  let component: ProjectsEgComponent;
  let fixture: ComponentFixture<ProjectsEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
