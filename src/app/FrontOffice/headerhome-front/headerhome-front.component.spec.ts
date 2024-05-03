import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderhomeFrontComponent } from './headerhome-front.component';

describe('HeaderhomeFrontComponent', () => {
  let component: HeaderhomeFrontComponent;
  let fixture: ComponentFixture<HeaderhomeFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderhomeFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderhomeFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
