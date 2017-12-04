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
    this.cliente = new Cliente;

    if(!isNaN(this.id)) {
      this.clienteService.getById(this.id).subscribe(
        dados => { this.cliente = dados; },
        erro => { console.log('ERROR', erro); }
      );
    }
  }

  dateToString(date: Date) {
    return date.toString();
  }

  add() {
    if( this.validate() ) {
      if(isNaN(this.id)) {
        this.clienteService.add(this.cliente).subscribe(
          ( dados: any ) => {
            if(dados.message == 'Saved') {
              this.alerts.push({
                type: 'success',
                msg: 'Cliente salvo com sucesso',
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
        this.cliente = new Cliente;

        this.alerts.push({
          type: 'success',
          msg: 'Cliente adicionado com sucesso',
          timeout: 3000
        });
      }else {
        this.clienteService.edit(this.id, this.cliente).subscribe(
          ( dados: any ) => {
            console.log(dados);
            if(dados.message == 'Saved') {
              this.alerts.push({
                type: 'success',
                msg: 'Produto salvo com sucesso',
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
  }

  validate() {
    return true;
  }

}
