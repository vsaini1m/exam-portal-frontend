import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestartQuizComponent } from './prestart-quiz.component';

describe('PrestartQuizComponent', () => {
  let component: PrestartQuizComponent;
  let fixture: ComponentFixture<PrestartQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestartQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestartQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
