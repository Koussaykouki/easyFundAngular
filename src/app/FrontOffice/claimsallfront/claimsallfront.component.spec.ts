import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsallfrontComponent } from './claimsallfront.component';

describe('ClaimsallfrontComponent', () => {
  let component: ClaimsallfrontComponent;
  let fixture: ComponentFixture<ClaimsallfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimsallfrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimsallfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
