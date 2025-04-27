import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingRouteComponent } from './lazy-loading-route.component';

describe('LazyLoadingRouteComponent', () => {
  let component: LazyLoadingRouteComponent;
  let fixture: ComponentFixture<LazyLoadingRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoadingRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadingRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
