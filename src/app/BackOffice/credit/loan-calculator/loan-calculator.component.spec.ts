import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoanCalculatorComponent } from './loan-calculator.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LoanCalculatorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoanCalculatorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ej2-angular-showcase-template'`, () => {
    const fixture = TestBed.createComponent(LoanCalculatorComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ej2-angular-showcase-template');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LoanCalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ej2-angular-showcase-template app is running!');
  });
});

