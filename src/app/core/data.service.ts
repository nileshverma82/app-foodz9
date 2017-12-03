import { Injectable } from '@angular/core';

// Firebase imports
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// Local imports
import { Fooditem } from './models/fooditem';
import { Observable } from 'rxjs/Observable';
import { Image } from './models/image';

// rxjx imports
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FormBuilder } from '@angular/forms';

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
  private _foodItemCollection: AngularFirestoreCollection<any>;
  private $firebaseId: string;

  url$ = new BehaviorSubject('dummy_url');

  constructor(private _afstore: AngularFirestore) {
    this.fooditemsPath = 'fooditems';
    this._foodItemCollection = this._afstore.collection(`${this.fooditemsPath}`);
  }

  /* FoodItems */
   fetchFooditems(): AngularFirestoreCollection<Fooditem> {
    return this._afstore.collection<Fooditem>(`${this.fooditemsPath}`); // , ref => ref.orderBy('created_at'));
    // return this._afstore.collection(this.fooditemsPath);
  }

  getFooditem(id: string): AngularFirestoreDocument<Fooditem> {
    return this._afstore.doc(`${this.fooditemsPath}/${id}`);
  }

  getFooditemsByUsers(uid: string): AngularFirestoreCollection<Fooditem[]> {
    return this._afstore.collection(`${this.fooditemsPath}`, ref => ref.where('uid', '==', uid));
  }

  createFooditem(foodItemCollection: Fooditem) {
    this._foodItemCollection.add({
      title: foodItemCollection.title,
     // description: foodItemCollection.description,
      isNonveg: foodItemCollection.isnonveg,
      category: foodItemCollection.category,
      cuisine: foodItemCollection.cuisine,
      price: foodItemCollection.price,
      serving: foodItemCollection.serving,
      imageurl1: foodItemCollection.imageurl1,
      // image2: foodItemCollection.imageurl2,
      // image3: foodItemCollection.imageurl3,
      // image4: foodItemCollection.imageurl4,
      createdAt: foodItemCollection.created_at
    }).then((docRef) => {
      this.$firebaseId = docRef.id;
      console.log(docRef.id);
      this._foodItemCollection.doc(docRef.id).update({
        id: docRef.id
      });
    }).catch((err) => {
      console.log(err);
    });
    console.log('image on submit', foodItemCollection.imageurl1);
  }

  saveToFirebaseStorage(inputImage: Image) {
    const storageRef = firebase.storage().ref();
    const uploadImageTask = storageRef.child(`${this.fooditemsPath}/${inputImage.file.name}`).put(inputImage.file);

    uploadImageTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        //  console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log('File uploadeding');

      },
      (error) => {
        console.log(error);
      },
      () => {
        this.url$.next(uploadImageTask.snapshot.downloadURL);
      }
    );
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
