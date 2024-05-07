import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractRequestComponent } from './contractRequest.component';

describe('ContractRequestComponent', () => {
  let component: ContractRequestComponent;
  let fixture: ComponentFixture<ContractRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
