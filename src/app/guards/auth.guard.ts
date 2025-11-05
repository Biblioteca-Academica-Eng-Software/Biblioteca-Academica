import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const token = auth.getToken();

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // Verifica validade do token
  try {
    const decoded: any = jwtDecode(token);
    const exp = decoded.exp * 1000; // segundos → milissegundos
    if (Date.now() > exp) {
      // Token expirado
      auth.logout();
      router.navigate(['/login']);
      return false;
    }
  } catch (e) {
    console.error('Token inválido:', e);
    auth.logout();
    router.navigate(['/login']);
    return false;
  }

  return true; // Token válido → permite entrar na rota
};
