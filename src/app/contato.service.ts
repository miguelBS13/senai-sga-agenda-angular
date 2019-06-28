import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContatoService {

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:8080/contatos')
      .toPromise()
      .then(response => response.json());
  }

  adicionar(contato: any): Promise<any> {
    return this.http.post(`http://localhost:8080/contatos/salvar`, contato)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:8080/contatos/remover/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(contato: any): Promise<any> {
    return this.http.put(`http://localhost:8080/contatos/editar`, contato)
      .toPromise()
      .then(response => response.json());
  }

}
