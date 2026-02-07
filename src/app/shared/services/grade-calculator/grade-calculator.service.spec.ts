import { TestBed } from '@angular/core/testing';

import { GradeCalculatorService } from './grade-calculator.service';

describe('GradeCalculatorService', () => {
  let service: GradeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
