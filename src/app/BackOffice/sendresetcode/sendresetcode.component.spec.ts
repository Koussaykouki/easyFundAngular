import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendresetcodeComponent } from './sendresetcode.component';

describe('SendresetcodeComponent', () => {
  let component: SendresetcodeComponent;
  let fixture: ComponentFixture<SendresetcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendresetcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendresetcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
