import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesInNgComponent } from './directives-in-ng.component';

describe('DirectivesInNgComponent', () => {
  let component: DirectivesInNgComponent;
  let fixture: ComponentFixture<DirectivesInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
