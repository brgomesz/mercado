import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService extends Dexie {
  produtos: Dexie.Table<Produto, number>;
  funcionarios: Dexie.Table<Funcionario, number>;

  constructor() {
    super('LocalDatabase');
    this.version(1).stores({
      produtos:
        '++id,codigoProduto, nomeProduto, precoProduto, validadeProduto, unidadeMedidaProduto, descontoProduto, quantidadeProduto, descricaoProduto',
        funcionarios:
        '++id,cpfFuncionario, nomeFuncionario, senhaFuncionario, permissaoFuncionario, salarioFuncionario, horasFuncionario',
   
    });

    this.produtos = this.table('produtos');
    this.funcionarios = this.table('funcionarios');
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

// FUNÇÕES FUNCIONARIOS 

  async addFuncionario(funcionario: Funcionario) {
    return await this.funcionarios.add(funcionario);
  }  

  async getFuncionarios(): Promise<Funcionario[]> {
    return await this.funcionarios.toArray();
  }

  async deleteFuncionario(id: number) {
    return await this.funcionarios.delete(id);
  }

}

export interface Produto {
  id?: number;
  codigoProduto: number | null;
  nomeProduto: string;
  precoProduto: number | null;
  validadeProduto: string;
  unidadeMedidaProduto: string;
  descontoProduto: number | null;
  quantidadeProduto: number | null;
  descricaoProduto: string;
}

export interface Funcionario {
    id?: number;
    cpfFuncionario: number | null,
    nomeFuncionario: string,
    senhaFuncionario: string ,
    permissaoFuncionario: string,
    salarioFuncionario: number | null,
    horasFuncionario: number | null,
}
