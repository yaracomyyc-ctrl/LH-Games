import { Component } from '@angular/core';
import { Jogo } from '../models/jogo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  jogos: Jogo[];

  // O constructor é executado quando o componente é criado.
  constructor() {
    this.jogos = [
      new Jogo(
        'Neon Challenge',
        'Supere desafios em um universo inspirado nos jogos clássicos.',
        300,
        'assets/img/jogo1.PNG'
      ),
      new Jogo(
        'Pixel Adventure',
        'Explore fases coloridas, colete itens e complete cada missão.',
        200,
        'assets/img/jogo2.PNG'
      ),
      new Jogo(
        'Pro Controller',
        'Dispute partidas emocionantes e alcance o topo do ranking.',
        400,
        'assets/img/jogo3.PNG'
      )
    ];
  }

  comprar(jogo: Jogo): void {
    alert(`${jogo.nome} foi selecionado!`);
  }
}
