import { Component, OnInit } from "@angular/core"
import { JogadorServico } from "../../servicos/jogador/jogador.servico";
import { SorteioSortear } from "../sortear/sorteio.sortear";
import { Jogador } from "../../modelo/jogador";
import { Equipe } from "../../modelo/equipe";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "sorteio-efetivar",
    templateUrl: "./sorteio.efetivar.component.html",
    styleUrls: ["./sorteio.efetivar.component.css"]
})
export class SorteioEfetivarComponent implements OnInit {
    public sorteioSortear: SorteioSortear;
    public jogadores: Jogador[];
    public totalJogadores: number;

    ngOnInit(): void {
        this.sorteioSortear = new SorteioSortear();
        this.jogadores = this.sorteioSortear.obterJogadores();
        this.atualizarTotal();
    }

    constructor(private usuarioServico: UsuarioServico) {

    }

    public remover(jogador: Jogador) {
        this.sorteioSortear.removerJogador(jogador);
        this.jogadores = this.sorteioSortear.obterJogadores();
        this.atualizarTotal();
    }

    public atualizarTotal() {
        this.totalJogadores = this.jogadores.reduce((acc, produto) => acc + 1, 0);
    }

    public jogadorComFoto(jogador: Jogador): boolean {
        var itens = this.jogadores;
        itens = itens.filter(j => j.id == jogador.id && j.nomeArquivo != null);
        return (itens.length > 0);
    }

    public sortearJogadores() {
        let equipe = new Equipe();
    }



    //public sortearEquipe() {
    //    let equipe = new Equipe();
    //}

    //public criarEquipe(): Equipe {
    //    let equipe = new Equipe();
    //    equipe.
    //}
}
