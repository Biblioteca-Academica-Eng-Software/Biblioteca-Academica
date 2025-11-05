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
    curso: '',
    disciplina: '',
    editora: '',
    imagem: '',
    titulo: '',
    disponiveis: 0,
    exemplares: 0,
    descricao: '',
  };

  resetarBook() {}

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
