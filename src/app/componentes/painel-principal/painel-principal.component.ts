import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from '../../models/produto';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: Produto[] = [];
  carregando = true;
  mensagemErro = '';

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando = true;
    this.mensagemErro = '';

    this.produtoService.listarProdutos().subscribe({
      next: produtos => {
        this.produtos = produtos;
        this.carregando = false;
      },
      error: () => {
        this.mensagemErro = 'Não foi possível carregar os produtos. Verifique se a API está ligada.';
        this.carregando = false;
      }
    });
  }

  editarProduto(id?: number): void {
    if (id !== undefined) {
      this.router.navigate(['/cadastro-produto', id]);
    }
  }

  excluirProduto(produto: Produto): void {
    if (produto.id === undefined) {
      return;
    }

    const confirmou = confirm(`Deseja realmente excluir ${produto.produto}?`);
    if (!confirmou) {
      return;
    }

    this.produtoService.excluirProduto(produto.id).subscribe({
      next: () => this.carregarProdutos(),
      error: () => alert('Não foi possível excluir o produto.')
    });
  }
}
