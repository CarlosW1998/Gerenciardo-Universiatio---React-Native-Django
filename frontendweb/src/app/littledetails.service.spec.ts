import { TestBed, inject } from '@angular/core/testing';

import { LittledetailsService } from './littledetails.service';

describe('LittledetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LittledetailsService]
    });
  });

  it('should be created', inject([LittledetailsService], (service: LittledetailsService) => {
    expect(service).toBeTruthy();
  }));
});
