import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingInNgComponent } from './routing-in-ng.component';

describe('RoutingInNgComponent', () => {
  let component: RoutingInNgComponent;
  let fixture: ComponentFixture<RoutingInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
