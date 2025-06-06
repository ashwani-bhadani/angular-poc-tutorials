import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypesComponent } from './datatypes.component';

describe('DatatypesComponent', () => {
  let component: DatatypesComponent;
  let fixture: ComponentFixture<DatatypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
