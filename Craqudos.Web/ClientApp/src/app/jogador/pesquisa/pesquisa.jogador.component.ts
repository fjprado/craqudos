import { Component, OnInit } from "@angular/core";
import { Jogador } from "../../modelo/jogador";
import { JogadorServico } from "../../servicos/jogador/jogador.servico";
import { Router } from "@angular/router";
import { SorteioSortear } from "../../sorteio/sortear/sorteio.sortear";

@Component({
  selector: "pesquisa-jogador",
  templateUrl: "./pesquisa.jogador.component.html",
  styleUrls: ["./pesquisa.jogador.component.css"]
})
export class PesquisaJogadorComponent implements OnInit {
  public jogadores: Jogador[];
  public sorteioSortear: SorteioSortear;

  ngOnInit(): void {
    this.sorteioSortear = new SorteioSortear();
  }

  constructor(private jogadorServico: JogadorServico, private router: Router) {
    this.jogadorServico.obterTodosJogadores()
      .subscribe(
        jogadores => {
          this.jogadores = jogadores;
        },
        e => {
          console.log(e.error);
        }
      );
  }

  public adicionarJogador() {
    sessionStorage.setItem('jogadorSession', "");
    this.router.navigate(['/cadastro-jogador']);
  }

  public deletarJogador(jogador: Jogador) {
    var retorno = confirm("Deseja realmente deletar o jogador selecionado?");
    if (retorno == true) {
      this.jogadorServico.deletar(jogador)
        .subscribe(
          jogadores => {
            this.jogadores = jogadores;

          },
          e => {
            console.log(e.errors);
          }
        );
    }
  }

  public editarJogador(jogador: Jogador) {
    sessionStorage.setItem('jogadorSession', JSON.stringify(jogador));
    this.router.navigate(['/cadastro-jogador']);
  }

  public adicionarJogadorSorteio(jogador: Jogador) {
    this.sorteioSortear.adicionar(jogador);
  }

  public removerJogadorSorteio(jogador: Jogador) {
    this.sorteioSortear.removerJogador(jogador);
  }

  public temJogadoresSorteio(): boolean {
    return this.sorteioSortear.temJogadoresSorteio();
  }

  public temJogadorAdicionado(jogador: Jogador): boolean {
    return this.sorteioSortear.temJogadorAdicionado(jogador);
  }

  public jogadorComFoto(jogador: Jogador): boolean {
    var itens = this.jogadores;
    itens = itens.filter(j => j.id == jogador.id && j.nomeArquivo != null);
    return (itens.length > 0);
  }

  public adicionarTodosJogadores(jogadores: Jogador[]) {
    for (let jogador of jogadores) {
      if (!this.temJogadorAdicionado(jogador)) {
        this.sorteioSortear.adicionar(jogador);
      }
    }    
  }

  public removerTodosJogadores(jogadores: Jogador[]) {
    for (let jogador of jogadores) {
      if (this.temJogadorAdicionado(jogador)) {
        this.sorteioSortear.removerJogador(jogador);
      }
    }
  }
}
