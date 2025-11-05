import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-emprestimos',
  imports: [],
  templateUrl: './emprestimos.html',
  styleUrl: './emprestimos.css',
})
export class Emprestimos {
  public status = {
    0: 'DEVOLVIDO',
    1: 'RESERVADO',
    2: 'EM PERIODO',
    3: 'ATRASADO',
  };

  constructor(private api: ApiService) {}

  public carregar_emprestimos() {
    this.api.getMeusEmprestimos();
  }
}
