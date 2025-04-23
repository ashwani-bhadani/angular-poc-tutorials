import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsInNgComponent } from './effects-in-ng.component';

describe('EffectsInNgComponent', () => {
  let component: EffectsInNgComponent;
  let fixture: ComponentFixture<EffectsInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectsInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectsInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
