import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOrderFormComponent } from './project-order-form.component';

describe('ProjectOrderFormComponent', () => {
  let component: ProjectOrderFormComponent;
  let fixture: ComponentFixture<ProjectOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
