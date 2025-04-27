import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusingComponent } from './reusing.component';

describe('ReusingComponent', () => {
  let component: ReusingComponent;
  let fixture: ComponentFixture<ReusingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
