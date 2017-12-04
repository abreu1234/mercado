import { Injectable } from '@angular/core';
import { Venda } from './venda';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/RX';

@Injectable()
export class VendaService {

  vendas: Venda[] = [];
  uri: string = 'http://localhost/mercado_api/api/venda/';

  constructor(private http: Http) { }

  get(): Observable<Venda[]> {
    return this.http.get( this.uri )
      .map((res: Response) => {
        return res.json().venda; 
      })
      .catch((erro: any) => Observable.throw(erro));
  }

  add(venda: Venda): Observable<Venda> {
    let bodyString = JSON.stringify(venda);
    let cabecalho = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cabecalho});
    
    return this.http.post(this.uri, bodyString, options)
      .map((res:Response) => {return res.json()})
      .catch((erro:any) => Observable.throw(erro));
  }

}
