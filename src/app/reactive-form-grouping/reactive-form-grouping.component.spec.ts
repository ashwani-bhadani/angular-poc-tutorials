import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormGroupingComponent } from './reactive-form-grouping.component';

describe('ReactiveFormGroupingComponent', () => {
  let component: ReactiveFormGroupingComponent;
  let fixture: ComponentFixture<ReactiveFormGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormGroupingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
