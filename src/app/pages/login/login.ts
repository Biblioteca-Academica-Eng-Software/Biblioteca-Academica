import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { ApiService } from '../../service/api.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
  providers: [ApiService],
  styleUrl: './login.css',
})
export class Login {
  public user: User = {
    id: 0,
    adm: false,
    nome: '',
    usuario: '',
    senha: '',
  };

  constructor(private router: Router, private api: AuthService) {}

  public login() {
    this.api.login(this.user).subscribe({
      next: (data) => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert(`Falha ao logar usuário. ${err}`);
      },
    });
  }

  public cadastro() {
    this.router.navigate(['/cadastro']);
  }
}
