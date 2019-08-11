import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCobListComponent } from './user-cob-list.component';

describe('UserCobListComponent', () => {
  let component: UserCobListComponent;
  let fixture: ComponentFixture<UserCobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
