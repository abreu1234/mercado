import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.class';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  public alerts: any = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.produtoService.get().subscribe(
      dados => { this.produtos = dados; },
      erro => { console.log('ERROR', erro); }
    );
  }

  remove(produto: Produto) {
    this.produtoService.remove(produto).subscribe(
      ( dados: any ) => {
        if(dados.message == 'Deleted') {
          this.getProducts();
          this.alerts.push({
            type: 'success',
            msg: 'Produto removido com sucesso',
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
