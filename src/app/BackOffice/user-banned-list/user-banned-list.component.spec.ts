import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBannedListComponent } from './user-banned-list.component';

describe('UserBannedListComponent', () => {
  let component: UserBannedListComponent;
  let fixture: ComponentFixture<UserBannedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBannedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBannedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
