import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/auth/pages/login/login.component';
import { RegisterPageComponent } from './features/auth/pages/register/register.component';
import { HomePageComponent } from './features/home/pages/homepage.component';
import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'homepage', component: HomePageComponent, canActivate: [AuthGuard] },
];
