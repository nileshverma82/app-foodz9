import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Fooditem } from '../../core/models/fooditem';
import { paramMap, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/data.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fooditem-detail',
  templateUrl: './fooditem-detail.component.html',
  styleUrls: ['./fooditem-detail.component.scss']
})
export class FooditemDetailComponent implements OnInit {


  foodItemDoc: AngularFirestoreDocument<Fooditem>;
  subscription: Subscription;
  foodItemObs: Observable<Fooditem>;
  constructor(private fs: DataService,
    private ar: ActivatedRoute ) { }

  ngOnInit() {

   
    this.foodItemObs = this.ar.paramMap.switchMap((param: paramMap) => {
      this.foodItemDoc = this.fs.getSingleFoodItem(param['id']);
     // this.foodItemObs = this.foodItemDoc.valueChanges();
      console.log(param['id']);

     });
   // this.foodItem = this.fs.getSingleFoodItem()

  }

}

