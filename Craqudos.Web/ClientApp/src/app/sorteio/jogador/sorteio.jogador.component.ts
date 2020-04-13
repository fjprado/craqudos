import { Component, OnInit } from "@angular/core"
import { JogadorServico } from "../../servicos/jogador/jogador.servico"
import { Jogador } from "../../modelo/jogador";
import { Router } from "@angular/router";
import { SorteioSortear } from "../sortear/sorteio.sortear";

@Component({
    selector: "sorteio-app-jogador",
    templateUrl: "./sorteio.jogador.component.html",
    styleUrls: ["./sorteio.jogador.component.css"]
})
export class SorteioJogadorComponent implements OnInit {
    public jogador: Jogador;
    public sorteioSortear: SorteioSortear;

    ngOnInit(): void {
        this.sorteioSortear = new SorteioSortear();
        var jogadorDetalhe = sessionStorage.getItem('jogadorDetalhe');
        if (jogadorDetalhe) {
            this.jogador = JSON.parse(jogadorDetalhe);
        }
    }

    constructor(private jogadorServico: JogadorServico, private router: Router) {

    }

    public adicionarSorteio() {
        this.sorteioSortear.adicionar(this.jogador);
        this.router.navigate(["/sorteio-efetivar"])
    }

}
