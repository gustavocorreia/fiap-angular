import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FiapAngularG - Sistema de Cadastro de usuários';

  constructor(private fireAuth: AngularFireAuth, private router: Router) {

    this.fireAuth.auth.onAuthStateChanged((user) => {
      if (user == null)  {
        this.router.navigate(['/login'])
      } 
    });
    
  }
}
