import { Injectable } from '@angular/core';
import { Produto } from './produto.class';

@Injectable()
export class ProdutoService {

  produtos: Produto[] = [
    {id: 1, nome: 'Produto1', ref: 'REF01', valor: 20, estoque: 5, date: new Date(2017, 9, 18)}
  ];
  ai: number = 2;

  constructor() { }

  get() {
    return this.produtos;
  }

  getById(id:number) {
    return this.produtos.find(produto => produto.id == id);
  }

  add(produto: Produto) {
    produto.id = this.ai++;
    this.produtos.push(produto);
  }

  edit(id: number, produto: Produto) {
    let index = this.produtos.indexOf(this.getById(id), 0);
    this.produtos[index] = produto;
  }

  remove(produto: Produto) {
    let index = this.produtos.indexOf(produto, 0);
    if(index > -1) {
      this.produtos.splice(index, 1);
    }
  }

}
