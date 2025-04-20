import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseInNgComponent } from './ifelse-in-ng.component';

describe('IfelseInNgComponent', () => {
  let component: IfelseInNgComponent;
  let fixture: ComponentFixture<IfelseInNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfelseInNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfelseInNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
