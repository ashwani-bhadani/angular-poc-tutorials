import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingInNgComponent } from './two-way-binding-in-ng.component';

describe('TwoWayBindingInNgComponent', () => {
  let component: TwoWayBindingInNgComponent;
  let fixture: ComponentFixture<TwoWayBindingInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
