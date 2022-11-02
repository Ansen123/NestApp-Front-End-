import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveByIdComponent } from './view-leave-by-id.component';

describe('ViewLeaveByIdComponent', () => {
  let component: ViewLeaveByIdComponent;
  let fixture: ComponentFixture<ViewLeaveByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaveByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLeaveByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
