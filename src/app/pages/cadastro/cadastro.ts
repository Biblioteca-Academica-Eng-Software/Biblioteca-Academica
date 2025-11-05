import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [MatButton],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  constructor(private router: Router) {}

  public login() {
    this.router.navigate(['login']);
  }
}
