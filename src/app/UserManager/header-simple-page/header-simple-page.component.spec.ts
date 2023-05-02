import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSimplePageComponent } from './header-simple-page.component';

describe('HeaderSimplePageComponent', () => {
  let component: HeaderSimplePageComponent;
  let fixture: ComponentFixture<HeaderSimplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSimplePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
