import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSimplePageComponent } from './menu-simple-page.component';

describe('MenuSimplePageComponent', () => {
  let component: MenuSimplePageComponent;
  let fixture: ComponentFixture<MenuSimplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSimplePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
