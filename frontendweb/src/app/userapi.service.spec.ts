import { TestBed, inject } from '@angular/core/testing';

import { UserapiService } from './userapi.service';

describe('UserapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserapiService]
    });
  });

  it('should be created', inject([UserapiService], (service: UserapiService) => {
    expect(service).toBeTruthy();
  }));
});
