import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Fooditem } from '../../core/models/fooditem';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fooditem-list',
  templateUrl: './fooditem-list.component.html',
  styleUrls: ['./fooditem-list.component.scss']
})
export class FooditemListComponent implements OnInit {

   _foodItemCollection: AngularFirestoreCollection<Fooditem>;
   foodItem: Observable<Fooditem[]>;

  constructor(private dataService$: DataService) { }


  ngOnInit() {
    this._foodItemCollection = this.dataService$.fetchFooditems();
    this.foodItem = this._foodItemCollection.valueChanges();
  }

}
