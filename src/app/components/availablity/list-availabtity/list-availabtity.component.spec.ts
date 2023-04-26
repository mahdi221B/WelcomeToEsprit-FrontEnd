import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailabtityComponent } from './list-availabtity.component';

describe('ListAvailabtityComponent', () => {
  let component: ListAvailabtityComponent;
  let fixture: ComponentFixture<ListAvailabtityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvailabtityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAvailabtityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
