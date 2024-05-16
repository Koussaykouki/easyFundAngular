import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedClaimsAllComponent } from './archived-claims-all.component';

describe('ArchivedClaimsAllComponent', () => {
  let component: ArchivedClaimsAllComponent;
  let fixture: ComponentFixture<ArchivedClaimsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivedClaimsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivedClaimsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
