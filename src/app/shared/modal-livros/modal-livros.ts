import { Component, Input } from '@angular/core';
import { Book, BookCompleto } from '../../models/book.model';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-modal-livros',
  imports: [],
  templateUrl: './modal-livros.html',
  styleUrl: './modal-livros.css',
})
export class ModalLivros {
  @Input() title: string = '';
  isOpen = false;
  livro: BookCompleto = {
    autor: '',
    nome: '',
    disciplina: '',
    editora: '',
    imagem: '',
    titulo: '',
    disponiveis: 0,
    exemplares: 0,
    descricao: '',
  };

  constructor(private api: ApiService) {}

  resetarBook() {
    this.livro = {
      autor: '',
      nome: '',
      disciplina: '',
      editora: '',
      imagem: '',
      titulo: '',
      disponiveis: 0,
      exemplares: 0,
      descricao: '',
    };
  }

  open(livro: BookCompleto) {
    this.livro = livro;
    this.isOpen = true;
  }

  public reservar(id: number) {
    this.api.reservar(id).subscribe({
      next: (data) => {
        alert(data);
        console.log(data);
      },
      error: (err) => {
        alert(`Falha ao logar usuário. ${err.error.error}`);
      },
    });
  }

  close() {
    this.isOpen = false;
    this.resetarBook();
  }
}
