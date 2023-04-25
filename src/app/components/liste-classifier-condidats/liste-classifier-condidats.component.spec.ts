import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClassifierCondidatsComponent } from './liste-classifier-condidats.component';

describe('ListeClassifierCondidatsComponent', () => {
  let component: ListeClassifierCondidatsComponent;
  let fixture: ComponentFixture<ListeClassifierCondidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeClassifierCondidatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeClassifierCondidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
