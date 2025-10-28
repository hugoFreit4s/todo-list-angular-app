import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginUserRequestDTO } from '../../../../types/user.types';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { CustomButton } from '../../../../shared/components/button/button.component';
import { CustomInput } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'login-page',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../../styles/app.scss'],
  imports: [RouterModule, FormsModule, CustomButton, CustomInput],
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
