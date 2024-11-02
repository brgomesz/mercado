import { Component, OnInit } from '@angular/core';
import { DatabaseService, Produto } from '../database.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.scss',
})
export class VitrineComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private dbService: DatabaseService) {}
  ngOnInit(): void {
    this.loadProdutos();
  }
  async loadProdutos() {
    this.produtos = await this.dbService.getProdutos();
  }
}
