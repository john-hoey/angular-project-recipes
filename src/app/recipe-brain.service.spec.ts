import { TestBed } from '@angular/core/testing';

import { RecipeBrainService } from './recipe-brain.service';

describe('RecipeBrainService', () => {
  let service: RecipeBrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeBrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
