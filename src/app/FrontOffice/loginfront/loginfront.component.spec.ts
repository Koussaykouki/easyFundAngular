import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfrontComponent } from './loginfront.component';

describe('LoginfrontComponent', () => {
  let component: LoginfrontComponent;
  let fixture: ComponentFixture<LoginfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginfrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
