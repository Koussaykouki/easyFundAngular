import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFinancingsComponent } from './my-financings.component';

describe('MyFinancingsComponent', () => {
  let component: MyFinancingsComponent;
  let fixture: ComponentFixture<MyFinancingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFinancingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFinancingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
