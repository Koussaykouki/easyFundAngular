import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordfrontComponent } from './resetpasswordfront.component';

describe('ResetpasswordfrontComponent', () => {
  let component: ResetpasswordfrontComponent;
  let fixture: ComponentFixture<ResetpasswordfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetpasswordfrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetpasswordfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
