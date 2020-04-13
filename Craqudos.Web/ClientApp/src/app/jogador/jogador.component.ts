import { Component, OnInit } from "@angular/core"
import { JogadorServico } from "../servicos/jogador/jogador.servico";
import { Jogador } from "../modelo/jogador";
import { Router } from "@angular/router";

@Component({
    selector: "app-jogador",
    templateUrl: "./jogador.component.html",
    styleUrls: ["./jogador.component.css"]
})
export class JogadorComponent implements OnInit {

    public jogador: Jogador;
    public arquivoSelecionado: File;
    public ativarSpinner: boolean;
    public mensagem: string;

    constructor(private jogadorServico: JogadorServico, private router: Router) {

    }

    ngOnInit(): void {
        var jogadorSession = sessionStorage.getItem('jogadorSession');
        if (jogadorSession) {
            this.jogador = JSON.parse(jogadorSession);
        } else {
            this.jogador = new Jogador();
        }
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.ativarEspera();
        this.jogadorServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.jogador.nomeArquivo = nomeArquivo;
                    console.log(nomeArquivo);
                    this.desativarEspera();
                },
                e => {
                    console.log(e.error);
                    this.desativarEspera();
                }
            );
    }

    public ativarEspera() {
        this.ativarSpinner = true;
    }

    public desativarEspera() {
        this.ativarSpinner = false;
    }

    public cadastrar() {
        this.ativarEspera();
        this.jogadorServico.cadastrarJogador(this.jogador)
            .subscribe(
                jogadorJson => {
                    this.mensagem = "";
                    this.desativarEspera();
                    this.router.navigate(['/pesquisa-jogador']);
                },
                e => {
                    console.log(e.error);
                    alert(e.error);
                    this.desativarEspera();
                }
            );
    }
}
