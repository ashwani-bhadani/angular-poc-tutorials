import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopInNgComponent } from './for-loop-in-ng.component';

describe('ForLoopInNgComponent', () => {
  let component: ForLoopInNgComponent;
  let fixture: ComponentFixture<ForLoopInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoopInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoopInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
