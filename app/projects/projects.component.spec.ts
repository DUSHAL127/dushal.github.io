import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectComponent]
    });
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
