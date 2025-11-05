import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Book } from '../../models/book.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  providers: [ApiService],
  styleUrl: './home.css',
})
export class Home {
  public logoPath = 'assets/image/logo-fei.png';
  public livros: Book[] = [];
  public user;
  public filtro = '';

  constructor(private api: ApiService, private auth: AuthService, private router: Router) {
    this.user = this.auth.getUserInfo();
    this.loadTops();
  }

  private loadTops() {
    this.api.getTops().subscribe({
      next: (data) => {
        this.livros = data;
      },
      error: (err) => {
        alert(`Falha ao logar usuário. ${err}`);
      },
    });
  }

  public sair() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  public pesquisar() {
    this.router.navigate(['/lista-livros'], {
      queryParams: { filtro: this.filtro },
    });
  }
}
