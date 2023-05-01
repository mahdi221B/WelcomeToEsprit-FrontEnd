import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCommentsComponent } from './add-update-comments.component';

describe('AddUpdateCommentsComponent', () => {
  let component: AddUpdateCommentsComponent;
  let fixture: ComponentFixture<AddUpdateCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
