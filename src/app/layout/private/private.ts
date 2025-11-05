import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet],
  templateUrl: './private.html',
  styleUrl: './private.css',
})
export class PrivateLayout {
  public logoPath = 'assets/image/logo-fei.png';
  public user;

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.getUserInfo();
  }

  public sair() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
