import { Component, OnInit } from '@angular/core';

import { ContatoService } from './contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contatos = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.contatoService.consultar()
      .then(dados => {
        this.contatos = dados;
      })
  }

  adicionar(nome: string,  fones: number, emails: string) {
    this.contatoService.adicionar({nome, fones, emails})
      .then(() => {
      });
      alert('Contato adicionado com sucesso!' );
      this.consultar();
  }

  excluir(id: number) {
    this.contatoService.excluir(id)
      .then(() => {
        alert('Contato excluído com sucesso!');
        this.consultar();
      });
  }

  atualizar(contato: any) {
    this.contatoService.atualizar(contato)
      .then(() => {
        alert('Contato alterado com sucesso!');
      });
  }

}
