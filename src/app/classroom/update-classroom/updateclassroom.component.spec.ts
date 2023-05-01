import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclassroomComponent } from './updateclassroom.component';

describe('UpdateclassroomComponent', () => {
  let component: UpdateclassroomComponent;
  let fixture: ComponentFixture<UpdateclassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateclassroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateclassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
