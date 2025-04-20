import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInNgComponent } from './events-in-ng.component';

describe('EventsInNgComponent', () => {
  let component: EventsInNgComponent;
  let fixture: ComponentFixture<EventsInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
