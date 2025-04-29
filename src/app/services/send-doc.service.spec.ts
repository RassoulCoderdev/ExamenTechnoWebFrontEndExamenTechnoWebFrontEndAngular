import { TestBed } from '@angular/core/testing';

import { SendDocService } from './send-doc.service';

describe('SendDocService', () => {
  let service: SendDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
