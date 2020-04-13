import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jogador } from "../../modelo/jogador";

@Injectable({
  providedIn: "root"
})
export class JogadorServico implements OnInit {
  private _baseUrl: string;
  public jogadores: Jogador[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit(): void {
    this.jogadores = [];
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public cadastrarJogador(jogador: Jogador): Observable<Jogador> {

    return this.http.post<Jogador>(this._baseUrl + "api/jogador", JSON.stringify(jogador), { headers: this.headers });
  }

  public salvar(jogador: Jogador): Observable<Jogador> {
    return this.http.post<Jogador>(this._baseUrl + "api/jogador/salvar", JSON.stringify(jogador), { headers: this.headers });
  }

  public deletar(jogador: Jogador): Observable<Jogador[]> {
    return this.http.post<Jogador[]>(this._baseUrl + "api/jogador/deletar", JSON.stringify(jogador), { headers: this.headers });
  }

  public obterTodosJogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this._baseUrl + "api/jogador");
  }

  public obterJogador(jogadorId: number): Observable<Jogador> {
    return this.http.get<Jogador>(this._baseUrl + "api/jogador/obter");
  }

  public enviarArquivo(arquivoSelecionado: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
    return this.http.post<string>(this._baseUrl + "api/jogador/enviarArquivo", formData);
  }
}
