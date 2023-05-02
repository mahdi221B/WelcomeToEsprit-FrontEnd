import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUserPageComponent } from './simple-user-page.component';

describe('SimpleUserPageComponent', () => {
  let component: SimpleUserPageComponent;
  let fixture: ComponentFixture<SimpleUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleUserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
