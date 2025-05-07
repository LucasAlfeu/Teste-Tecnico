import { TestBed } from '@angular/core/testing';

import { MostraNoticiaService } from './mostra-noticia.service';

describe('MostraNoticiaService', () => {
  let service: MostraNoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostraNoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
