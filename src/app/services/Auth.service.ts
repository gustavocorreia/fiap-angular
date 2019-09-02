import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { ILogin } from 'src/app/interfaces/ILogin'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

    get authUser() : Observable<firebase.User> {
        return this.fireAuth.user;
    }

    get isAuthenticated() : boolean {
        console.log(this.fireAuth.authState);
        if(this.fireAuth.user === undefined)
            return false;

        return true;
    }

    constructor(private fireAuth: AngularFireAuth){
    }

    createUser(userLogin: ILogin) {
        return this.fireAuth.auth
                .createUserWithEmailAndPassword(userLogin.email, userLogin.password);
    }

    signIn(userLogin: ILogin) {
        return this.fireAuth.auth
                .signInWithEmailAndPassword(userLogin.email, userLogin.password);
    }

    signOut() {
        return this.fireAuth.auth.signOut();
    }


}