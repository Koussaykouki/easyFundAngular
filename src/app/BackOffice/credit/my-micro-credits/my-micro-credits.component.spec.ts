import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMicroCreditsComponent } from './my-micro-credits.component';

describe('MyMicroCreditsComponent', () => {
  let component: MyMicroCreditsComponent;
  let fixture: ComponentFixture<MyMicroCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMicroCreditsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyMicroCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
