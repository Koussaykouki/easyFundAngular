import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsAllComponent } from './claims-all.component';

describe('ClaimsAllComponent', () => {
  let component: ClaimsAllComponent;
  let fixture: ComponentFixture<ClaimsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
