import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOpenClaimsComponent } from './your-open-claims.component';

describe('YourOpenClaimsComponent', () => {
  let component: YourOpenClaimsComponent;
  let fixture: ComponentFixture<YourOpenClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourOpenClaimsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourOpenClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
