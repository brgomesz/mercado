import { Component, OnInit } from '@angular/core';
import { DatabaseService, Produto } from '../database.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-produtos.component.html',
  styleUrls: ['./registro-produtos.component.scss'],
})
export class RegistroProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  novoProduto: Produto = {
    codigoProduto: null,
    nomeProduto: '',
    precoProduto: null,
    validadeProduto: '',
    unidadeMedidaProduto: '',
    descontoProduto: null,
    quantidadeProduto: null,
    descricaoProduto: '',
  };

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  async loadProdutos() {
    this.produtos = await this.dbService.getProdutos();
  }

  async addProduto() {
    await this.dbService.addProduto(this.novoProduto);
    this.novoProduto = {
      codigoProduto: null,
      nomeProduto: '',
      precoProduto: null,
      validadeProduto: '',
      unidadeMedidaProduto: '',
      descontoProduto: null,
      quantidadeProduto: null,
      descricaoProduto: '',
    };
    this.loadProdutos();
  }

  async deleteProduto(index: number) {
    const produto = this.produtos[index];
    if (produto && produto.id !== undefined) {
      await this.dbService.deleteProduto(produto.id);
      this.loadProdutos();
    } else {
      console.error("Produto não encontrado ou id não definido!");
    }
  }
}
