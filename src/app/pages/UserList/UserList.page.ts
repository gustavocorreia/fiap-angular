import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';


@Component({
    templateUrl: './UserList.page.html',
    styleUrls: ['./UserList.page.css']
})

export class UserListPage {

    private users: Array<User>;

    constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit () {
        this.getAllUsers()
    }

    private getAllUsers() {
        const usersSnapshot = this.usersService.getAll();

        this.users = new Array<User>();

        usersSnapshot.subscribe(resp => {

            resp.map(item => {

                if (item.payload.doc.exists) {
                    const user = {
                        id: item.payload.doc.id,
                        ...item.payload.doc.data()
                    } as User;

                    this.users.push(user);
                }
            });
        })
    }
}