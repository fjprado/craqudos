import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(private router: Router, private usuarioServico: UsuarioServico) {

    }

    public usuarioLogado(): boolean {
        return this.usuarioServico.usuarioAutenticado();
    }
}
