import { Component } from '@angular/core';

import { UsersService } from '../../services/Users.service';

@Component({
    templateUrl: './User.page.html',
    styleUrls: ['./User.page.css']
})

export class UserPage {
    private loading: boolean = false;

    constructor(private usersService: UsersService) {

    }

    createUser() {
        this.loading = true;
        this.usersService.create({
            name: 'Inacio José Correia',
            email: 'inacio@teste.com.br',
            age: 58,
            phone: '+5511945645645'
        }).then(() => {
            this.loading = false;
        }).catch((error) => {
            this.loading = false;
        });
    }
}