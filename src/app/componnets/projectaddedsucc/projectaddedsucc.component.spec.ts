import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectaddedsuccComponent } from './projectaddedsucc.component';

describe('ProjectaddedsuccComponent', () => {
  let component: ProjectaddedsuccComponent;
  let fixture: ComponentFixture<ProjectaddedsuccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectaddedsuccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectaddedsuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
