import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimslistfrontComponent } from './claimslistfront.component';

describe('ClaimslistfrontComponent', () => {
  let component: ClaimslistfrontComponent;
  let fixture: ComponentFixture<ClaimslistfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimslistfrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimslistfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
