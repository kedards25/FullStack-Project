import { TestBed, inject } from '@angular/core/testing';

import { EmployeeservicesService } from './employeeservices.service';

describe('EmployeeservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeservicesService]
    });
  });

  it('should be created', inject([EmployeeservicesService], (service: EmployeeservicesService) => {
    expect(service).toBeTruthy();
  }));
});
