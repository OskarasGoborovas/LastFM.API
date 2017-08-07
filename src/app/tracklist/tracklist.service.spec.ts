import { TestBed, inject } from '@angular/core/testing';

import { TracklistService } from './tracklist.service';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TracklistService]
    });
  });

  it('should be created', inject([TracklistService], (service: TracklistService) => {
    expect(service).toBeTruthy();
  }));
});
