import { TestBed } from '@angular/core/testing';

import { ContactDaoService } from './contact-dao.service';

describe('ContactDaoService', () => {
  let service: ContactDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
