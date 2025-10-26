import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginUserRequestDTO } from '../../../../types/user.types';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'login-page',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../../styles/app.scss'],
  imports: [RouterModule, FormsModule],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  passwordFieldType: 'text' | 'password' = 'password';
  constructor(private router: Router, private authService: AuthService) {}
  goToRegister() {
    this.router.navigate(['/register']);
  }
  login() {
    const payload: LoginUserRequestDTO = { email: this.email, password: this.password };
    this.authService.login(payload);
  }
  changePasswordFieldType() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
