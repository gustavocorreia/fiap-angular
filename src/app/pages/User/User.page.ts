import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../services/Users.service';
import { AuthService } from '../../services/Auth.service';
import { ILogin } from 'src/app/interfaces/ILogin';
import { IUser } from '../../interfaces/IUser';

@Component({
    templateUrl: './User.page.html',
    styleUrls: ['./User.page.css']
})

export class UserPage {
    public userId: string = '';
    public loading: boolean = false;

    userForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        cpf: new FormControl('', Validators.required),
        postalCode: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        number: new FormControl('', [Validators.required]),
        complement: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        password_confirm: new FormControl('', Validators.required) 
    });

    constructor(private usersService: UsersService,
                private authService: AuthService,
                private route: ActivatedRoute, 
                private router: Router) {
        
    }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        
        if(this.userId)
            this.getUser(this.userId);
    }

    private getUser(id: string){

        const userSnapshot = this.usersService.getById(id);

        userSnapshot.subscribe(res => {
            if (res.payload.exists) {
                const user = res.payload.data();

                Object.keys(user)
                    .filter(key => key != 'id')
                    .forEach((key) => {
                        this.userForm.controls[key].setValue(user[key]);
                    });
                }
        });
    }

    onSubmit() {
        this.loading = true;

        const user = this.userForm.value as IUser;

        if (this.userId) {
            this.alterUser(user);
        } else {
            const login = {
                email: this.userForm.value.email,
                password: this.userForm.value.password
            } as ILogin;

            this.authService.createUser(login)
            .then((newUser) => {
                this.createUser(user);
            }).catch((err) => {
                console.error(err);
                this.loading = false;
            });
        }   
        
    }

    createUser(user: IUser) {
        this.usersService.create(user)
        .then(() => this.router.navigate(['/']))
        .catch(() => this.loading = false);
    }

    alterUser(user: IUser){
        this.usersService.update(this.userId, user)
        .then(() => this.router.navigate(['/']))
        .catch(() => this.loading = false);
    }
}