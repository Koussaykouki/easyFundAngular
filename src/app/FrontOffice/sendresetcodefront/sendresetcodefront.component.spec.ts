import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendresetcodefrontComponent } from './sendresetcodefront.component';

describe('SendresetcodefrontComponent', () => {
  let component: SendresetcodefrontComponent;
  let fixture: ComponentFixture<SendresetcodefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendresetcodefrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendresetcodefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
