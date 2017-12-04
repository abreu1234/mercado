import { Component, OnInit } from '@angular/core';
import { Venda } from '../venda/venda';
import { VendaService } from '../venda/venda.service';
import { Produto } from '../produto/produto.class';
import { ProdutoService } from '../produto/produto.service';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.css']
})
export class VendaFormComponent implements OnInit {

  venda: Venda;
  produtos: Produto[];
  clientes: Cliente[];
  public alerts: any = [];

  constructor(
    private vendaService: VendaService,
    private produtoService: ProdutoService, private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.venda = new Venda;
    this.produtoService.get().subscribe(
      dados => { this.produtos = dados; },
      erro => { console.log('ERROR', erro); }
    );
    this.clienteService.get().subscribe(
      dados => { this.clientes = dados; },
      erro => { console.log('ERROR', erro); }
    );
  }

  add() {
    if( this.validate() ) {
      this.vendaService.add(this.venda).subscribe(
        ( dados: any ) => {
          console.log(dados);
          if(dados.message == 'Saved') {
            this.alerts.push({
              type: 'success',
              msg: 'Venda efetuada com sucesso',
              timeout: 3000
            });
            this.venda = new Venda;
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

  validate() {
    return true;
  }

}
