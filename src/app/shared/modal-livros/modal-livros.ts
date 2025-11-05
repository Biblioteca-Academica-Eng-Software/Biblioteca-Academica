import { Component, Input } from '@angular/core';
import { Book, BookCompleto } from '../../models/book.model';

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

  close() {
    this.isOpen = false;
    this.resetarBook();
  }
}
