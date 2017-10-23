import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService {

  clientes: Cliente[] = [
    {id: 1, cpf: '123.123.123-00', nome: 'Cliente 1', data_nascimento: new Date(1990, 5, 5)},
    {id: 2, cpf: '123.123.123-00', nome: 'Cliente 2', data_nascimento: new Date(1990, 5, 4)}
  ];
  ai: number = 3;

  constructor() { }

  get() {
    return this.clientes;
  }

  getById(id:number) {
    return this.clientes.find(cliente => cliente.id == id);
  }

  add(cliente: Cliente) {
    cliente.id = this.ai++;
    this.clientes.push(cliente);
  }

  edit(id: number, cliente: Cliente) {
    let index = this.clientes.indexOf(this.getById(id), 0);
    this.clientes[index] = cliente;
  }

  remove(cliente: Cliente) {
    let index = this.clientes.indexOf(cliente, 0);
    if(index > -1) {
      this.clientes.splice(index, 1);
    }
  }

}
