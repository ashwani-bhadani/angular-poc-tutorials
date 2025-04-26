import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataFromParentToChildComponent } from './pass-data-from-parent-to-child.component';

describe('PassDataFromParentToChildComponent', () => {
  let component: PassDataFromParentToChildComponent;
  let fixture: ComponentFixture<PassDataFromParentToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataFromParentToChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDataFromParentToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
