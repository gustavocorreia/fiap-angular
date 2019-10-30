import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'header-component',
    templateUrl: './Header.component.html',
    styleUrls: ['./Header.component.css']
})

export class HeaderComponent {

    isAutenticated = true;

    constructor(private authService: AuthService,   
                public router: Router) { 
                  
    }

    ngOnInit() {
        this.verifyAuthentication();  
    }

    private verifyAuthentication() {
        this.isAutenticated = this.authService.isAuthenticated;
    }

    signOut() {
        this.authService.signOut().then(() => {
            this.router.navigate(['/login']);
        }).catch((err) => {
            console.error(err);
        });
    }
}