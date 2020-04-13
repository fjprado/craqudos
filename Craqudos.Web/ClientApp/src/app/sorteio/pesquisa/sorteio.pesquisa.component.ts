import { Component, OnInit } from "@angular/core"
import { JogadorServico } from "../../servicos/jogador/jogador.servico";
import { Jogador } from "../../modelo/jogador";
import { Router } from "@angular/router";

@Component({
  selector: "app-sorteio",
  templateUrl: "./sorteio.pesquisa.component.html",
  styleUrls: ["./sorteio.pesquisa.component.css"]
})
export class SorteioPesquisaComponent implements OnInit {
  public jogadores: Jogador[];

  ngOnInit(): void {
        
  }

  constructor(private jogadorServico: JogadorServico, private router: Router) {
    this.jogadorServico.obterTodosJogadores()
      .subscribe(
        jogadores => {
          this.jogadores = jogadores;
        },
        e => {
          console.log(e.error);
        })
  }

    public abrirJogador(jogador: Jogador) {
        sessionStorage.setItem('jogadorDetalhe', JSON.stringify(jogador));
        this.router.navigate(['/sorteio-jogador'])
    }
}
