import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];
  public alerts: any = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.get().subscribe(
      dados => { this.clientes = dados; },
      erro => { console.log('ERROR', erro); }
    );
  }

  remove(cliente: Cliente) {
    this.clienteService.remove(cliente).subscribe(
      ( dados: any ) => {
        if(dados.message == 'Deleted') {
          this.getClientes();
          this.alerts.push({
            type: 'success',
            msg: 'Cliente removido com sucesso',
            timeout: 3000
          });
        }else{
          this.alerts.push({
            type: 'warning',
            msg: 'Ocorreu um erro',
            timeout: 3000
          });
        }
       },
      erro => { console.log('ERROR', erro); }
    );
  }

}
