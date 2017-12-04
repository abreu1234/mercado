import { Component, OnInit } from '@angular/core';
import { Venda } from './venda';
import { VendaService } from './venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  vendas: Venda[];

  constructor(private vendaService: VendaService) { }

  ngOnInit() {
    //this.vendas = this.vendaService.get();
  }

}
