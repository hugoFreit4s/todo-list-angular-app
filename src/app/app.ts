import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './styles/app.scss',
})
export class App {
  protected readonly title = signal('todo-list-angular');
  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd && e.url === '/homepage') {
        this.authService.logout();
      }
    });
  }
}
