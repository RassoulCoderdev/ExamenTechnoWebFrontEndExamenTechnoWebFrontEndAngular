import { TestBed } from '@angular/core/testing';

import { AnnocesService } from './annoces.service';

describe('AnnocesService', () => {
  let service: AnnocesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnocesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
