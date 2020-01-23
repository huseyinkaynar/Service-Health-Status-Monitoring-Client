import { TestBed } from '@angular/core/testing';

import { CheckServicesService } from './check-services.service';

describe('CheckServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckServicesService = TestBed.get(CheckServicesService);
    expect(service).toBeTruthy();
  });
});
