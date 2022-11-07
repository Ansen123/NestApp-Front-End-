import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogviewadminComponent } from './logviewadmin.component';

describe('LogviewadminComponent', () => {
  let component: LogviewadminComponent;
  let fixture: ComponentFixture<LogviewadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogviewadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogviewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
