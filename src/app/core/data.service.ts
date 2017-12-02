import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Fooditem } from './models/fooditem';
import { Observable } from 'rxjs/Observable';

export interface AppUser {
  uid: string;
  isAnonymous: boolean;
  displayName?: string;
  email?: string;
  photoURL?: string;
}

@Injectable()
export class DataService {

  private fooditemsPath: string;
  private appUsersPath: string;
  private appCartPath: string;

  constructor(private _afstore: AngularFirestore) {
    this.fooditemsPath = 'fooditems';
  }

  /* FoodItems */
  get fooditems(): AngularFirestoreCollection<Fooditem> {
    return this._afstore.collection<Fooditem>(`${this.fooditemsPath}`, ref => ref.orderBy('created_at'));
    // return this._afstore.collection(this.fooditemsPath);
  }

  getFooditem(id: string): AngularFirestoreDocument<Fooditem> {
    return this._afstore.doc(`${this.fooditemsPath}/${id}`);
  }

  getFooditemsByUsers(uid: string): AngularFirestoreCollection<Fooditem[]> {
    return this._afstore.collection(`${this.fooditemsPath}`, ref => ref.where('uid', '==', uid));
  }

  createFooditem(fooditem: Fooditem) {
    console.log('TODO: Create new fooditem: ', fooditem);
    // return this.afs.doc(`${this.fooditemsPath}/${fooditem.id}`).set({ ...fooditem });
  }

  /* FoodItems */

  /* AppUser */

  getUserData(user): Observable<AppUser> {
    return this._afstore.doc<any>(`app-users/${user.uid}`).valueChanges();
  }

  updateUserData(user: any) {
    const appusersRef: AngularFirestoreDocument<AppUser> = this._afstore.doc(`app-users/${user.uid}`);
    const data: AppUser = {
      uid: user.uid,
      isAnonymous: user.isAnonymous,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
    return appusersRef.set(data);
  }

}
