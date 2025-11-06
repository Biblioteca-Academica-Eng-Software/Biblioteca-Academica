import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ResponseHistorico } from '../../models/book.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-emprestimos',
  imports: [DatePipe],
  templateUrl: './emprestimos.html',
  styleUrl: './emprestimos.css',
})
export class Emprestimos {
  public statusList = ['DEVOLVIDO', 'RESERVADO', 'EM PERIODO', 'ATRASADO'];
  public status = null;
  public emprestimos: ResponseHistorico[] = [];

  constructor(private api: ApiService) {
    this.carregar_emprestimos();
  }

  public carregar_emprestimos() {
    this.api.getMeusEmprestimos().subscribe({
      next: (data) => {
        this.emprestimos = data;
      },
      error: (err) => {
        alert(`Falha ao logar usuário. ${err}`);
      },
    });
  }
}
