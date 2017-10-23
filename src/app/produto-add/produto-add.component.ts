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
  id:number;

  constructor(
    private produtoService: ProdutoService, private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    if(isNaN(this.id)) {
      this.produto = new Produto;
    }else{
      this.produto = Object.assign({}, this.produtoService.getById(this.id));
    }
  }

  add() {
    if( this.validate() ) { 
      if(isNaN(this.id)) {
        this.produtoService.add(this.produto);
        this.produto = new Produto;
      }else {
        this.produtoService.edit(this.id, this.produto);
      }
    }
  }

  validate() {
    return true;
  }

}
