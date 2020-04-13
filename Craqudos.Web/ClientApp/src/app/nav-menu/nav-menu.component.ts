import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';
import { SorteioSortear } from '../sorteio/sortear/sorteio.sortear';
import { Usuario } from '../modelo/usuario';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
    isExpanded = false;
    public sorteioSortear: SorteioSortear;

    ngOnInit(): void {
        this.sorteioSortear = new SorteioSortear();
    }

    constructor(private router: Router, private usuarioServico: UsuarioServico) {

    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    public usuarioLogado(): boolean {
        return this.usuarioServico.usuarioAutenticado();

    }

    public usuarioAdministrador(): boolean {
        return this.usuarioServico.usuarioAdministrador();
    }

    logoff() {
        this.usuarioServico.limparSessao();
        this.router.navigate(['/']);
    }

    get usuario() {
        return this.usuarioServico.usuario;
    }

    public temJogadoresSorteio(): boolean {
        return this.sorteioSortear.temJogadoresSorteio() && this.usuarioLogado();
    }

    public editarUsuario(usuario: Usuario) {
        sessionStorage.setItem('usuarioSession', JSON.stringify(usuario));
        this.router.navigate(['/cadastro-usuario']);
    }
}
