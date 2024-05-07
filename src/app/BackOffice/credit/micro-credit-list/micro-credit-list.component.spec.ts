import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCreditListComponent } from './micro-credit-list.component';

describe('MicroCreditListComponent', () => {
  let component: MicroCreditListComponent;
  let fixture: ComponentFixture<MicroCreditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroCreditListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
