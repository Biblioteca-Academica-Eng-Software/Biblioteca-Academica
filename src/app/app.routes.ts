import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Home } from './pages/home/home';
import { Emprestimos } from './pages/emprestimos/emprestimos';
import { Contato } from './pages/contato/contato';
import { ListaLivros } from './pages/lista-livros/lista-livros';
import { NgModule } from '@angular/core';
import { authGuard } from './guards/auth.guard';
import { PrivateLayout } from './layout/private/private';
import { PublicLayout } from './layout/public/public';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'cadastro', component: Cadastro },
    ],
  },
  {
    path: '',
    component: PrivateLayout,
    children: [
      { path: 'contato', component: Contato, canActivate: [authGuard] },
      { path: 'emprestimos', component: Emprestimos, canActivate: [authGuard] },
      { path: 'home', component: Home, canActivate: [authGuard] },
      { path: 'lista-livros', component: ListaLivros, canActivate: [authGuard] },
      { path: '**', component: Home },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
