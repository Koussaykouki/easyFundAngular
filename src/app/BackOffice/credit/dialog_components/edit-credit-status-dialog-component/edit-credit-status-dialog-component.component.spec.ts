import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreditStatusDialogComponentComponent } from './edit-credit-status-dialog-componentcomponent';

describe('EditCreditStatusDialogComponentComponent', () => {
  let component: EditCreditStatusDialogComponentComponent;
  let fixture: ComponentFixture<EditCreditStatusDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCreditStatusDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCreditStatusDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
