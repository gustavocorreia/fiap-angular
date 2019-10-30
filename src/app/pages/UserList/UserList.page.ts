import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/Users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { SortPipe } from 'src/app/pipes/sort.pipe';

@Component({
    templateUrl: './UserList.page.html',
    styleUrls: ['./UserList.page.css'],
})

export class UserListPage {

    public users: Array<User>;
    
    public loading: boolean = false;
    public filterBy = '';
    public sortBy = '';

    // Font-awesome
    faEdit = faEdit;
    faTimes = faTimes;

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

    onDelete(id) {
        this.loading = true;

        this.usersService.delete(id).then((data) => {
            this.router.navigate(['/']);
        }).catch((error) => {
            this.loading = false;
            console.error(error);
        });
    }

    newFilterBy(event) {
        this.filterBy = event.target.value;
    }

    newSortBy(event) {
        this.filterBy = event.target.value;
    }
}