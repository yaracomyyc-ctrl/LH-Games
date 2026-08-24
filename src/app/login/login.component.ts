import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  senha = '';
  mensagem = '';

  entrar(): void {
    // Nesta primeira versão não existe conexão com o Back-End.
    this.mensagem = `Olá, ${this.usuario}! Formulário enviado com sucesso.`;
  }
}
