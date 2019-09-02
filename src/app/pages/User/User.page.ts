import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../services/Users.service';
import { AuthService } from '../../services/Auth.service';
import { ILogin } from 'src/app/interfaces/ILogin';

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

        let finish = null;
        let finishAuth = null;

        let uid = null;

        const user = {
            name: this.userForm.value.name,
            email: this.userForm.value.email,
            age: this.userForm.value.age,
            phone: this.userForm.value.phone,
            cpf: this.userForm.value.cpf,
            postalCode: this.userForm.value.postalCode,
            street: this.userForm.value.street,
            number: this.userForm.value.number,
            complement: this.userForm.value.complement,
            city: this.userForm.value.city,
            state: this.userForm.value.state
        };

        if (this.userId)
            finish = this.usersService.update(this.userId, user); 
        else {
            const login = {
                email: this.userForm.value.email,
                password: this.userForm.value.password
            } as ILogin;

            finishAuth = this.authService.createUser(login);

            finishAuth.then((newUser) => {
                uid = newUser.uid;
            }).catch((err) => {
                this.loading = false;
            });

            if(uid === null)
                finish = this.usersService.update(uid, user);
            else
                finish = this.usersService.create(user);
        }
            
        if(finish === undefined)
            finish.then(() => this.router.navigate(['/']))
                .catch(() => this.loading = false);
        else
            this.loading = false;
    }
}