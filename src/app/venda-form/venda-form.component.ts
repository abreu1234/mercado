import { Component, OnInit } from '@angular/core';
import { Venda } from '../venda/venda';
import { VendaService } from '../venda/venda.service';
import { Produto } from '../produto/produto.class';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.css']
})
export class VendaFormComponent implements OnInit {

  venda: Venda;
  produtos: Produto[];

  constructor(
    private vendaService: VendaService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.venda = new Venda;
    //this.produtos = this.produtoService.get();
  }

  add() {
    if( this.validate() ) {
      this.vendaService.add(this.venda);
      this.venda = new Venda;
    }
  }

  validate() {
    return true;
  }

}
