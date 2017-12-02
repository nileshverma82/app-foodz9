import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseError } from 'firebase/app';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { DataService, AppUser } from './data.service';
import { AngularFireAuthModule } from 'angularfire2/auth';


@Injectable()
export class AuthService {

  public appUser$: Observable<AppUser>;

  constructor(private _afAuth: AngularFireAuth, private _dataService: DataService) {

    this.appUser$ = this._afAuth.authState
      .switchMap((user: firebase.User) => {
        if (user) {
          return this._dataService.getUserData(user);
        } else {
          return Observable.of(null);
        }
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.signInSocial(provider);
  }

  signInSocial(provider: firebase.auth.AuthProvider) {
    return this._afAuth.auth.signInWithPopup(provider)
      .then((result: firebase.auth.UserCredential) => {
        this._dataService.updateUserData(result.user);
      }).catch((e: FirebaseError) => {
        const errorCode = e.code;
        const errorMsg = e.message;
        if (errorCode === 'authService/account-exists-with-different-credential') {
          alert('You have signed up with a different provider for that email.');
        } else { }
        console.log('ERROR @ AuthService#signIn() :', e);
      });
  }

  signOut(): void {
    this._afAuth.auth.signOut();
  }

}
