import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDashBrodComponent } from './security-dash-brod.component';

describe('SecurityDashBrodComponent', () => {
  let component: SecurityDashBrodComponent;
  let fixture: ComponentFixture<SecurityDashBrodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityDashBrodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityDashBrodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
