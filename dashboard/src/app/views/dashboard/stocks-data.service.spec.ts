import { TestBed } from '@angular/core/testing';

import { StocksDataService } from './stocks-data.service';

describe('StocksDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocksDataService = TestBed.get(StocksDataService);
    expect(service).toBeTruthy();
  });
});
