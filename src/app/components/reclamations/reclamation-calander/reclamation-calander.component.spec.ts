import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationCalanderComponent } from './reclamation-calander.component';

describe('ReclamationCalanderComponent', () => {
  let component: ReclamationCalanderComponent;
  let fixture: ComponentFixture<ReclamationCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationCalanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
