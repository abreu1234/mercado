import { Injectable } from '@angular/core';
import { Venda } from './venda';

@Injectable()
export class VendaService {

  vendas: Venda[] = [
    {
      id: 1,
      produtos: [],
      cliente: {id: 2, cpf: '123.123.123-00', nome: 'Cliente 2', data_nascimento: new Date(1990, 5, 4)},
      data: new Date(2017, 5, 5),
      total: 20
    }
  ];
  ai: number = 2;

  constructor() { }

  get() {
    return this.vendas;
  }

  add(venda: Venda) {
    venda.id = this.ai++;
    this.vendas.push(venda);
  }

}
