import { Injectable } from '@angular/core';
import { Produto } from './produto.class';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/RX';

@Injectable()
export class ProdutoService {

  produtos: Produto[] = [];
  uri: string = 'http://localhost/mercado_api/api/produto/';

  constructor(private http: Http) { }

  get(): Observable<Produto[]> {
    return this.http.get( this.uri )
      .map((res: Response) => {
        return res.json().produto; 
      })
      .catch((erro: any) => Observable.throw(erro));
  }

  getById(id: number): Observable<Produto> {
    return this.http.get( this.uri+id )
    .map((res: Response) => {
      return res.json().produto; 
    })
    .catch((erro: any) => Observable.throw(erro));
  }

  add(produto: Produto): Observable<Produto> {
    let bodyString = JSON.stringify(produto);
    let cabecalho = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cabecalho});
    
    return this.http.post(this.uri, bodyString, options)
      .map((res:Response) => {return res.json()})
      .catch((erro:any) => Observable.throw(erro));
  }

  edit(id: number, produto: Produto): Observable<Produto> {
    let bodyString = JSON.stringify(produto);
    let cabecalho = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cabecalho});
    
    return this.http.put(this.uri+id, bodyString, options)
      .map((res:Response) => {return res.json()})
      .catch((erro:any) => Observable.throw(erro));
  }

  remove(produto: Produto): Observable<Produto> {
    let cabecalho = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cabecalho});
    
    return this.http.delete(this.uri+produto.id, options)
      .map((res:Response) => {return res.json()})
      .catch((erro:any) => Observable.throw(erro));
  }

}