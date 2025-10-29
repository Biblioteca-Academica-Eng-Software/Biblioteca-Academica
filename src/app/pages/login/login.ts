import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public usuario = '';
  public senha = '';

  constructor(private router: Router) {}

  public login() {}

  public cadastro() {
    this.router.navigate(['/cadastro']);
  }
}
