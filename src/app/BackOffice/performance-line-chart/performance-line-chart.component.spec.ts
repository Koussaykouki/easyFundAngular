import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceLineChartComponent } from './performance-line-chart.component';

describe('PerformanceLineChartComponent', () => {
  let component: PerformanceLineChartComponent;
  let fixture: ComponentFixture<PerformanceLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformanceLineChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
