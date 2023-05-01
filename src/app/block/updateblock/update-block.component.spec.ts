import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlockComponent } from './update-block.component';

describe('UpdateBlockComponent', () => {
  let component: UpdateBlockComponent;
  let fixture: ComponentFixture<UpdateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
