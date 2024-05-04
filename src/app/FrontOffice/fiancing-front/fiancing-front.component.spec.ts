import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiancingFrontComponent } from './fiancing-front.component';

describe('FiancingFrontComponent', () => {
  let component: FiancingFrontComponent;
  let fixture: ComponentFixture<FiancingFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiancingFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiancingFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
