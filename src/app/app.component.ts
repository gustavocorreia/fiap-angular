import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FiapAngularG';

  constructor(private fireAuth: AngularFireAuth, private router: Router) {

    this.fireAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        this.router.navigate(['/login'])
      } 
    });
    
  }
}
