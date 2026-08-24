import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from '../../models/produto';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produto: Produto = {
    produto: '',
    descricao: '',
    foto: '',
    preco: null
  };

  produtoId?: number;
  salvando = false;
  mensagemErro = '';

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idDaRota = this.route.snapshot.paramMap.get('id');

    if (idDaRota) {
      this.produtoId = Number(idDaRota);
      this.carregarProduto(this.produtoId);
    }
  }

  get editando(): boolean {
    return this.produtoId !== undefined;
  }

  carregarProduto(id: number): void {
    this.produtoService.buscarProdutoPorId(id).subscribe({
      next: produto => this.produto = produto,
      error: () => this.mensagemErro = 'Não foi possível localizar o produto.'
    });
  }

  salvar(): void {
    if (this.produto.preco === null) {
      return;
    }

    this.salvando = true;
    this.mensagemErro = '';

    const requisicao = this.editando
      ? this.produtoService.atualizarProduto(this.produtoId!, this.produto)
      : this.produtoService.cadastrarProduto(this.produto);

    requisicao.subscribe({
      next: () => {
        alert(this.editando ? 'Produto atualizado com sucesso!' : 'Produto cadastrado com sucesso!');
        this.router.navigate(['/painel-principal']);
      },
      error: () => {
        this.mensagemErro = 'Não foi possível salvar. Verifique se a API está ligada.';
        this.salvando = false;
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/painel-principal']);
  }
}
