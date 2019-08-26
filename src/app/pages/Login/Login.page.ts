import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
    templateUrl: './Login.page.html',
    styleUrls: ['./Login.page.css']
})

export class LoginPage {

    constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {

    }

    onSubmit() {
        
    }
}