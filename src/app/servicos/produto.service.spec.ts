import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProdutoService } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProdutoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('deve listar os produtos da API', () => {
    service.listarProdutos().subscribe(produtos => expect(produtos.length).toBe(1));

    const requisicao = httpMock.expectOne('http://localhost:3000/produtos');
    expect(requisicao.request.method).toBe('GET');
    requisicao.flush([
      { id: 1, produto: 'Jogo teste', descricao: 'Descrição', foto: 'jogo1.PNG', preco: 100 }
    ]);
  });
});
