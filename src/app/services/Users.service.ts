import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private http: HttpClient, private db: AngularFirestore) {}

    getById(id: string) {
        return this.db.collection('users').doc(id).snapshotChanges();
    }

    getAll() {
        return this.db.collection('users').snapshotChanges();
    }

    create(data) {
        return this.db.collection('users').add(data);
    }

    update(id, data) {
        return this.db.collection('users').doc(id).set(data);
    }

    delete(id) {
        return this.db.collection('users').doc(id).delete();
    }
}

