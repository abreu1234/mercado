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

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtos = this.produtoService.get();
  }

  remove(produto: Produto) {
    this.produtoService.remove(produto);
  }

}
