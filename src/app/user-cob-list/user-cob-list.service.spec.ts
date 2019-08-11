import { TestBed } from '@angular/core/testing';

import { UserCobListService } from './user-cob-list.service';

describe('UserCobListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCobListService = TestBed.get(UserCobListService);
    expect(service).toBeTruthy();
  });
});
