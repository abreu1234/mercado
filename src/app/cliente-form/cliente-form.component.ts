import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;
  id:number;
  bsConfig: Partial<BsDatepickerConfig>;
  public alerts: any = [];

  constructor(
    private clienteService: ClienteService, private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, {locale: 'ptBr'});

    this.id = this.activatedRoute.snapshot.params['id'];

    if(isNaN(this.id)) {
      this.cliente = new Cliente;
    }else{
      this.cliente = Object.assign({}, this.clienteService.getById(this.id));
    }
  }

  dateToString(date: Date) {
    return date.toString();
  }

  add() {
    if( this.validate() ) {
      if(isNaN(this.id)) {
        this.clienteService.add(this.cliente);
        this.cliente = new Cliente;

        this.alerts.push({
          type: 'success',
          msg: 'Cliente adicionado com sucesso',
          timeout: 3000
        });
      }else {
        this.alerts.push({
          type: 'success',
          msg: 'Cliente editado com sucesso',
          timeout: 3000
        });
        this.clienteService.edit(this.id, this.cliente);
      }
    }
  }

  validate() {
    return true;
  }

}
