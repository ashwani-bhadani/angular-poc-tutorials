import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsInNgComponent } from './signals-in-ng.component';

describe('SignalsInNgComponent', () => {
  let component: SignalsInNgComponent;
  let fixture: ComponentFixture<SignalsInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
