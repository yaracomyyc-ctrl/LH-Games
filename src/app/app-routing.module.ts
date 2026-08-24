import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PainelPrincipalComponent } from './componentes/painel-principal/painel-principal.component';
import { CadastroProdutoComponent } from './componentes/cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  { path: 'painel-principal', component: PainelPrincipalComponent, title: 'Painel de produtos | LH Games' },
  { path: 'cadastro-produto', component: CadastroProdutoComponent, title: 'Cadastrar produto | LH Games' },
  { path: 'cadastro-produto/:id', component: CadastroProdutoComponent, title: 'Editar produto | LH Games' },
  { path: 'inicio', component: InicioComponent, title: 'Início | LH Games' },
  { path: 'login', component: LoginComponent, title: 'Login | LH Games' },
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' },
  { path: '**', redirectTo: '/painel-principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
