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
  selectedfoodItem: Fooditem;

  constructor(private dataService: DataService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .switchMap((params: Params) => this.dataService.getSingleFoodItem(params['id']))
      .subscribe(fetchedFoodItem => this.selectedfoodItem = fetchedFoodItem);
  }
}

