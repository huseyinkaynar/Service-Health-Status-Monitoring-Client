import { TestBed } from '@angular/core/testing';

import { PostservicesFormService } from './postservices-form.service';

describe('PostservicesFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostservicesFormService = TestBed.get(PostservicesFormService);
    expect(service).toBeTruthy();
  });
});
