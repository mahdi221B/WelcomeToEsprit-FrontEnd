import { TestBed } from '@angular/core/testing';

import { JobOfferServiceService } from './job-offer-service.service';

describe('JobOfferServiceService', () => {
  let service: JobOfferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobOfferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
