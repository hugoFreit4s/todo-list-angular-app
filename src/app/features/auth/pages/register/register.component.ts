import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisterUserRequestDTO } from '../../../../types/user.types';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [RouterModule, FormsModule],
})
export class RegisterPageComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router, private authService: AuthService) {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
  register() {
    const payload: RegisterUserRequestDTO = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.authService.register(payload);
  }
}
