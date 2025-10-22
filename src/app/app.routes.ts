import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Home } from './pages/home/home';
import { Emprestimos } from './pages/emprestimos/emprestimos';
import { Contato } from './pages/contato/contato';
import { ListaLivros } from './pages/lista-livros/lista-livros';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'contato', component: Contato },
  { path: 'emprestimos', component: Emprestimos },
  { path: 'home', component: Home },
  { path: 'lista-livros', component: ListaLivros },
//   { path: 'home', component: Home, canActivate: [AuthGuard] },
//   { path: 'emprestimos', component: Emprestimos, canActivate: [AuthGuard] },
  { path: '**', component: Login },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}