import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRolePageComponent } from './list-role-page.component';

describe('ListRolePageComponent', () => {
  let component: ListRolePageComponent;
  let fixture: ComponentFixture<ListRolePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRolePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
