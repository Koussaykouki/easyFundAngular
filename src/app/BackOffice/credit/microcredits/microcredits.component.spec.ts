import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrocreditsComponent } from './microcredits.component';


describe('MicrocreditsComponent', () => {
  let component: MicrocreditsComponent;
  let fixture: ComponentFixture<MicrocreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicrocreditsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MicrocreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
