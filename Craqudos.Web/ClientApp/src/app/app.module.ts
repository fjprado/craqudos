import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TruncateModule } from 'ng2-truncate';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './usuario/login/login.component';
import { GuardaRotas } from './autenticacao/guarda.rotas';
import { UsuarioServico } from './servicos/usuario/usuario.servico';
import { JogadorComponent } from './jogador/jogador.component';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro.usuario.component';
import { JogadorServico } from './servicos/jogador/jogador.servico';
import { PesquisaJogadorComponent } from './jogador/pesquisa/pesquisa.jogador.component';
import { SorteioPesquisaComponent } from './sorteio/pesquisa/sorteio.pesquisa.component';
import { SorteioJogadorComponent } from './sorteio/jogador/sorteio.jogador.component';
import { SorteioEfetivarComponent } from './sorteio/efetivar/sorteio.efetivar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    JogadorComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    PesquisaJogadorComponent,
    SorteioPesquisaComponent,
    SorteioJogadorComponent,
    SorteioEfetivarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    TruncateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cadastro-jogador', component: JogadorComponent, canActivate: [GuardaRotas] },
      { path: 'entrar', component: LoginComponent },
      { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
      { path: 'pesquisa-jogador', component: PesquisaJogadorComponent, canActivate: [GuardaRotas] },
      { path: 'sorteio-pesquisa', component: SorteioPesquisaComponent, canActivate: [GuardaRotas] },
      { path: 'sorteio-jogador', component: SorteioJogadorComponent, canActivate: [GuardaRotas] },
      { path: 'sorteio-efetivar', component: SorteioEfetivarComponent, canActivate: [GuardaRotas] }
    ])
  ],
  providers: [UsuarioServico, JogadorServico],
  bootstrap: [AppComponent]
})
export class AppModule { }
//{ path: 'listar', component: JogadorComponent, canActivate: [GuardaRotas] },
