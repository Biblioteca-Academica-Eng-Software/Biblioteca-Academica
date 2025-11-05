import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-cadastro',
  imports: [MatButton, FormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  public cadastro: User = {
    id: 0,
    adm: false,
    nome: '',
    usuario: '',
    senha: '',
  };

  constructor(private router: Router, private api: AuthService) {}

  public login() {
    this.router.navigate(['login']);
  }

  public cadastrar() {
    this.api.register(this.cadastro).subscribe({
      next: (data) => {
        console.log('Usuário criado:', data);
        alert('Usuário criado com sucesso!');
        this.login();
      },
      error: (err) => {
        alert(`Falha ao criar usuário. ${err.error.error}`);
      },
    });
  }
}
