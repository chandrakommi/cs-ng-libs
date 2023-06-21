import { TestBed } from '@angular/core/testing';

import { FormGroupBuilderService } from './form-group-builder.service';

describe('FormGroupBuilderService', () => {
  let service: FormGroupBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGroupBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
