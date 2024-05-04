import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhomefrontComponent } from './allhomefront.component';

describe('AllhomefrontComponent', () => {
  let component: AllhomefrontComponent;
  let fixture: ComponentFixture<AllhomefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllhomefrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllhomefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
