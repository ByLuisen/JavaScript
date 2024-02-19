import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isLogged: boolean = false;
  user!: boolean;

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.auth.usuario.subscribe((resultat) => {
      this.isLogged = resultat;
    });
    if (localStorage.getItem('user') != null) {
      this.user = true;
    } else {
      this.user = false;
    }
  }
  logout() {
    this.auth.logout();
    this.route.navigate(['/home']);
  }
}
