import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesInNgComponent } from './pipes-in-ng.component';

describe('PipesInNgComponent', () => {
  let component: PipesInNgComponent;
  let fixture: ComponentFixture<PipesInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
