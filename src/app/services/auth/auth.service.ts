import { Injectable } from '@angular/core';
import {
  AuthResponseDTO,
  LoginUserRequestDTO,
  RegisterUserRequestDTO,
} from '../../types/user.types';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/api-url.constants';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');

    if (token === null || expiresIn === null || Date.now() > Number(expiresIn)) {
      return false;
    }
    return true;
  }

  register(payload: RegisterUserRequestDTO) {
    this.http.post<AuthResponseDTO>(API_URL.REGISTER, payload).subscribe({
      next: (res) => {
        console.log('subscribe');
        this.saveUserDataInLS(res);
        this.router.navigate(['/homepage']);
      },
    });
  }

  login(payload: LoginUserRequestDTO) {
    this.http.post<AuthResponseDTO>(API_URL.LOGIN, payload).subscribe({
      next: (res) => {
        console.log('subscribe');
        this.saveUserDataInLS(res);
        this.router.navigate(['/homepage']);
      },
    });
  }

  saveUserDataInLS(data: AuthResponseDTO): void {
    this.localStorageService.setItem('token', data.token);
    this.localStorageService.setItem('expiresIn', (Date.now() + data.expiresIn).toString());
    this.localStorageService.setItem('userName', data.name);
    this.localStorageService.setItem('userEmail', data.email);
  }

  logout() {
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('expiresIn');
    this.localStorageService.removeItem('userName');
    this.localStorageService.removeItem('userEmail');
  }
}
