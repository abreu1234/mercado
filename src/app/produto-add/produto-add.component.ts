import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto.class';
import { ProdutoService } from '../produto/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  styleUrls: ['./produto-add.component.css']
})
export class ProdutoAddComponent implements OnInit {

  produto: Produto;
  id: number;
  public alerts: any = [];

  constructor(
    private produtoService: ProdutoService, private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.produto = new Produto;

    if(!isNaN(this.id)) {
      this.produtoService.getById(this.id).subscribe(
        dados => { this.produto = dados; },
        erro => { console.log('ERROR', erro); }
      );
    }
  }

  add() {
    if( this.validate() ) {
      if(isNaN(this.id)) {
        this.produtoService.add(this.produto).subscribe(
          ( dados: any ) => {
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

        this.produto = new Produto;
      }else {
        this.produtoService.edit(this.id, this.produto).subscribe(
          ( dados: any ) => {
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
