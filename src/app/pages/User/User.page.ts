import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../services/Users.service';

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
    });

    constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
        
    }

    ngOnInit(){
        this.userId = this.route.snapshot.paramMap.get('id');
        
        if(this.userId)
            this.getUser(this.userId);
    }

    private getUser(id: string){

        const userSnapshot = this.usersService.getById(id);

        userSnapshot.subscribe(res => {
            if (res.payload.exists) {
                const user = res.payload.data();

                console.log(user);

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

        if (this.userId)
            finish = this.usersService.update(this.userId, this.userForm.value); 
        else
            finish = this.usersService.create(this.userForm.value);

        finish.then(() => this.router.navigate(['/']))
        .catch(() => this.loading = false);
    }
}