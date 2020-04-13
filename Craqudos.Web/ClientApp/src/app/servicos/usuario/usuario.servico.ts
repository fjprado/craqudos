import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../modelo/usuario";

@Injectable({
    providedIn: "root"
})
export class UsuarioServico {
    private _baseUrl: string;
    private _usuario: Usuario;


    get usuario(): Usuario {
        let usuario_json = sessionStorage.getItem("usuario-autenticado");
        this._usuario = JSON.parse(usuario_json);
        return this._usuario;
    }

    set usuario(usuario: Usuario) {
        sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
        this._usuario = usuario;
    }

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    public usuarioAutenticado(): boolean {
        return this._usuario != null && this._usuario.login != "" && this._usuario.senha != "";
    }

    public usuarioAdministrador(): boolean {
        return this.usuarioAutenticado() && this.usuario.administrador;
    }

    public limparSessao() {
        sessionStorage.setItem("usuario-autenticado", "");
        this._usuario = null;
    }

    public verificarUsuario(usuario: Usuario): Observable<Usuario> {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            login: usuario.login,
            senha: usuario.senha
        }

        return this.http.post<Usuario>(this._baseUrl + "api/usuario/verificarusuario", body, { headers });
    }

    public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {

        return this.http.post<Usuario>(this._baseUrl + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
    }
}
