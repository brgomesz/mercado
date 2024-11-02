import { Component, OnInit } from '@angular/core';
import { DatabaseService, Funcionario } from '../database.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-funcionarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-funcionarios.component.html',
  styleUrl: './registro-funcionarios.component.scss'
})
export class RegistroFuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  novoFuncionario: Funcionario = {
    cpfFuncionario: null,
    nomeFuncionario: '',
    senhaFuncionario: '' ,
    permissaoFuncionario: '',
    salarioFuncionario: null,
    horasFuncionario: null,
  }
  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    this.loadFuncionarios();
  }

  async loadFuncionarios() {
    this.funcionarios = await this.dbService.getFuncionarios();
  }

  async addFuncionarios() {
    await this.dbService.addFuncionario(this.novoFuncionario);
    this.novoFuncionario = {
      cpfFuncionario: null,
      nomeFuncionario: '',
      senhaFuncionario: '' ,
      permissaoFuncionario: '',
      salarioFuncionario: null,
      horasFuncionario: null,
    };
    this.loadFuncionarios();
  }

  async deleteFuncionarios(index: number) {
    const funcionario = this.funcionarios[index];
    if (funcionario && funcionario.id !== undefined) {
      await this.dbService.deleteFuncionario(funcionario.id);
      this.loadFuncionarios();
    } else {
      console.error("Funcionário não encontrado ou id não definido!");
    }
  }

}
