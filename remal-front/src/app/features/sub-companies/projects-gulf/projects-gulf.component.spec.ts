import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsGulfComponent } from './projects-gulf.component';

describe('ProjectsGulfComponent', () => {
  let component: ProjectsGulfComponent;
  let fixture: ComponentFixture<ProjectsGulfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsGulfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsGulfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
