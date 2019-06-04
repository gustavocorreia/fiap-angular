import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private http: HttpClient, private db: AngularFirestore) {}

    getById(id: string) {
        return this.db.collection('users').doc('');
    }

    create(data) {
        return this.db.collection('users').add({id: uuid(), ...data});
    }
}

