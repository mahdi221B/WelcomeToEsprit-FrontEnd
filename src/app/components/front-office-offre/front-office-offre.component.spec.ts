import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontOfficeOffreComponent } from './front-office-offre.component';

describe('FrontOfficeOffreComponent', () => {
  let component: FrontOfficeOffreComponent;
  let fixture: ComponentFixture<FrontOfficeOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontOfficeOffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontOfficeOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
