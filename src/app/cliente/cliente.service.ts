import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/RX';

@Injectable()
export class ClienteService {

  clientes: Cliente[] = [];
  uri: string = 'http://localhost/mercado_api/api/cliente/';

  constructor(private http: Http) { }

  get(): Observable<Cliente[]> {
    return this.http.get( this.uri )
      .map((res: Response) => {
        return res.json().cliente;
      })
      .catch((erro: any) => Observable.throw(erro));
  }

  getById(id:number): Observable<Cliente> {
    return this.http.get( this.uri+id )
    .map((res: Response) => {
      return res.json().cliente; 
    })
    .catch((erro: any) => Observable.throw(erro));
  }

  add(c: Cliente): Observable<Cliente> {
    let bodyString = JSON.stringify(c);
    let cabecalho = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cabecalho});
    
    return this.http.post(this.uri, bodyString, options)
      .map((res:Response) => {return res.json()})
      .catch((erro:any) => Observable.throw(erro));
  }

  edit(id: number, cliente: Cliente): Observable<Cliente> {
    let bodyString = JSON.stringify(cliente);
    let cabecalho = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cabecalho});
    
    return this.http.put(this.uri+id, bodyString, options)
      .map((res:Response) => {return res.json()})
      .catch((erro:any) => Observable.throw(erro));
  }

  remove(cliente: Cliente): Observable<Cliente> {
    let cabecalho = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cabecalho});
    
    return this.http.delete(this.uri+cliente.id, options)
      .map((res:Response) => {return res.json()})
      .catch((erro:any) => Observable.throw(erro));
  }

}
