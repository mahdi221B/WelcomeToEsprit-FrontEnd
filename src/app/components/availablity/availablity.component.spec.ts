import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablityComponent } from './availablity.component';

describe('AvailablityComponent', () => {
  let component: AvailablityComponent;
  let fixture: ComponentFixture<AvailablityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
