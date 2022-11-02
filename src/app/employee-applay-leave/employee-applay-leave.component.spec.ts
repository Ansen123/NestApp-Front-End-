import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApplayLeaveComponent } from './employee-applay-leave.component';

describe('EmployeeApplayLeaveComponent', () => {
  let component: EmployeeApplayLeaveComponent;
  let fixture: ComponentFixture<EmployeeApplayLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeApplayLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeApplayLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
