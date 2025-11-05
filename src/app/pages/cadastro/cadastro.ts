import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  imports: [MatButton, FormsModule, HttpClientModule],
  providers: [ApiService],
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

  constructor(private router: Router, private api: ApiService) {}

  public login() {
    this.router.navigate(['login']);
  }

  public cadastrar() {
    this.api.postCadastro(this.cadastro).subscribe({
      next: (data) => {
        console.log('Usuário criado:', data);
        alert('Usuário criado com sucesso!');
        this.cadastro = { id: 0, adm: false, nome: '', usuario: '', senha: '' };
      },
      error: (err) => {
        console.error('Erro ao criar usuário:', err);
        alert('Falha ao criar usuário.');
      },
    });
  }
}
