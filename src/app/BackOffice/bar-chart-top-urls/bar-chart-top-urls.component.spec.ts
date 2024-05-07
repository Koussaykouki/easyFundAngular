import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartTopUrlsComponent } from './bar-chart-top-urls.component';

describe('BarChartTopUrlsComponent', () => {
  let component: BarChartTopUrlsComponent;
  let fixture: ComponentFixture<BarChartTopUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarChartTopUrlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarChartTopUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
