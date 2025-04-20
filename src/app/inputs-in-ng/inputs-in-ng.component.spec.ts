import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsInNgComponent } from './inputs-in-ng.component';

describe('InputsInNgComponent', () => {
  let component: InputsInNgComponent;
  let fixture: ComponentFixture<InputsInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
