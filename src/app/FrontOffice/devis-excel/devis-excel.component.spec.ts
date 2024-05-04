import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisExcelComponent } from './devis-excel.component';

describe('DevisExcelComponent', () => {
  let component: DevisExcelComponent;
  let fixture: ComponentFixture<DevisExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevisExcelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevisExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
