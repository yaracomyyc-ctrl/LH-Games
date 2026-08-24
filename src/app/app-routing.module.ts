import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'Início | LH Games' },
  { path: 'login', component: LoginComponent, title: 'Login | LH Games' },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
