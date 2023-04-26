import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvailabtityComponent } from './add-availabtity.component';

describe('AddAvailabtityComponent', () => {
  let component: AddAvailabtityComponent;
  let fixture: ComponentFixture<AddAvailabtityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAvailabtityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAvailabtityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
