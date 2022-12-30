import { TestBed } from '@angular/core/testing';

import { CargarScripsService } from './cargar-scrips.service';

describe('CargarScripsService', () => {
  let service: CargarScripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarScripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
