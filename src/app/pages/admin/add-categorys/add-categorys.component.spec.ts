import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorysComponent } from './add-categorys.component';

describe('AddCategorysComponent', () => {
  let component: AddCategorysComponent;
  let fixture: ComponentFixture<AddCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
