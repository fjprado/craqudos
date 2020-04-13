import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  public usuario;
  public mensagem: string;
  public returnUrl: string;
  public ativarSpinner: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usuarioServico: UsuarioServico) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
  }

  entrar() {
    this.ativarSpinner = true;
    this.usuarioServico.verificarUsuario(this.usuario).
      subscribe(
        usuario_json => {
          this.usuarioServico.usuario = usuario_json;

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          console.log(err);
          this.mensagem = err.error;
          this.ativarSpinner = false;
        }
      );
  }
}
