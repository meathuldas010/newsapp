import { TestBed } from '@angular/core/testing';

import { NewsApiService } from './newsapi.service';

describe('NewsapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsApiService = TestBed.get(NewsApiService);
    expect(service).toBeTruthy();
  });
});
