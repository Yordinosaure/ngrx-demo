import { TestBed } from '@angular/core/testing';

import { EletricalMeterService } from './eletrical-meter.service';

describe('EletricalMeterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EletricalMeterService = TestBed.get(EletricalMeterService);
    expect(service).toBeTruthy();
  });
});
