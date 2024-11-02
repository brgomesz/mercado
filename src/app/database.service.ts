import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService extends Dexie {
  produtos: Dexie.Table<Produto, number>;

  constructor() {
    super('LocalDatabase');
    this.version(1).stores({
      produtos:
        '++id,codigoProduto, nomeProduto, precoProduto, validadeProduto, unidadeMedidaProduto, descontoProduto, quantidadeProduto, descricaoProduto',
    });

    this.produtos = this.table('produtos');
  }

  async addProduto(produto: Produto) {
    return await this.produtos.add(produto);
  }

  async getProdutos(): Promise<Produto[]> {
    return await this.produtos.toArray();
  }

  async deleteProduto(id: number) {
    return await this.produtos.delete(id);
  }
}

export interface Produto {
  id?: number;
  codigoProduto: number;
  nomeProduto: string;
  precoProduto: number;
  validadeProduto: string;
  unidadeMedidaProduto: string;
  descontoProduto: number;
  quantidadeProduto: number;
  descricaoProduto: string;
}
