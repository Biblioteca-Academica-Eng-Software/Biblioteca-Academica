import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book.model';
import { ApiService } from '../../service/api.service';
import { ModalLivros } from '../../shared/modal-livros/modal-livros';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-livros',
  imports: [ModalLivros, FormsModule, CommonModule],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
})
export class ListaLivros {
  public filtro = '';
  public livros: Book[] = [];
  @ViewChild('modalLivros') modal!: ModalLivros;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {
    this.route.queryParams.subscribe((params) => {
      this.filtro = params['filtro'];
    });
    this.filtro = this.filtro ? this.filtro : '';
    this.loadBooks();
  }

  loadBooks() {
    this.api.getLivros(this.filtro).subscribe({
      next: (data) => {
        this.livros = data;
      },
      error: (err) => {
        alert(`Falha ao carregar livro.`);
        console.log(err);
      },
    });
  }

  infoLivro(id: number) {
    this.api.getLivroById(id).subscribe({
      next: (data) => {
        this.modal.open(data);
      },
      error: (err) => {
        alert(`Falha ao carregar livro.`);
        console.log(err);
      },
    });
  }
}
