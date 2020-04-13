import { Jogador } from "../../modelo/jogador";

export class SorteioSortear {
  public jogadores: Jogador[] = [];
  public adicionar(jogador: Jogador) {
    var jogadorLocalStorage = localStorage.getItem("jogadorLocalStorage");
    if (!jogadorLocalStorage) {
      //se não existir nada no Local Storage
      this.jogadores.push(jogador);
    } else {
      //se existir algo no Local Storage
      this.jogadores = JSON.parse(jogadorLocalStorage);
      this.jogadores.push(jogador);
    }
    localStorage.setItem("jogadorLocalStorage", JSON.stringify(this.jogadores));
  }

  public obterJogadores(): Jogador[] {
    var jogadorLocalStorage = localStorage.getItem("jogadorLocalStorage");
    if (jogadorLocalStorage) {
      return JSON.parse(jogadorLocalStorage);
    }
    return this.jogadores;
  }

  public removerJogador(jogador: Jogador) {
    var jogadorLocalStorage = localStorage.getItem("jogadorLocalStorage");
    if (jogadorLocalStorage) {
      this.jogadores = JSON.parse(jogadorLocalStorage);
      this.jogadores = this.jogadores.filter(j => j.id != jogador.id);
      localStorage.setItem("jogadorLocalStorage", JSON.stringify(this.jogadores));
    }
  }

  public temJogadoresSorteio(): boolean {
    var itens = this.obterJogadores();
    return (itens.length > 0);
  }

  public temJogadorAdicionado(jogador: Jogador): boolean {
    var itens = this.obterJogadores();
    itens = itens.filter(j => j.id == jogador.id);
    return (itens.length > 0);
  }

}
