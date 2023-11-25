import { TestBed } from '@angular/core/testing';
import { ControleEditora} from './controle.service';

describe('ControleEditora', () => {
  let service: ControleEditora;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleEditora);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
