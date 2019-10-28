import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/Auth.service';
import { ILogin } from '../../interfaces/ILogin';

@Component({
    templateUrl: './Login.page.html',
    styleUrls: ['./Login.page.css']
})

export class LoginPage {
    public loading: boolean = false;

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService, private router: Router) {

    }

    onSubmit() {
        this.loading = true;

        const userLogin = this.loginForm.value as ILogin;

        this.authService.setPersistent().then(() => {
            let finish = this.authService.signIn(userLogin);

            finish.then(() => this.router.navigate(['/']))
            .catch(() => this.loading = false);
        }).catch(() => this.loading = false);
        
    }

    onClickNewUser() {
        this.router.navigate(['/user']);
    }
}