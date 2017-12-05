import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Fooditem } from '../../core/models/fooditem';
import { ParamMap, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../core/data.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fooditem-detail',
  templateUrl: './fooditem-detail.component.html',
  styleUrls: ['./fooditem-detail.component.scss']
})
export class FooditemDetailComponent implements OnInit {

  subscription: Subscription;
  selectedfoodItem: Observable<Fooditem>;

  constructor(private _dataService: DataService,
    private _route: ActivatedRoute ) { }

  ngOnInit() {

  //   this.subscription = this.route.params
  //     .switchMap((params: Params) => this.dataService.getSingleFoodItem(params['id']))
  //     .subscribe(fetchedFoodItem => this.selectedfoodItem = fetchedFoodItem);
  //
  this.selectedfoodItem = this._route.paramMap.switchMap(
    param => {
      return this._dataService.getSingleFoodItem(param.get('id')).valueChanges();
    });
}
}

