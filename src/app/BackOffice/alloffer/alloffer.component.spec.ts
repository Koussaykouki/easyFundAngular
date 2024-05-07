import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllofferComponent } from './alloffer.component';

describe('AllofferComponent', () => {
  let component: AllofferComponent;
  let fixture: ComponentFixture<AllofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllofferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
