import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Observable } from 'rxjs/Observable';
import { Fooditem } from '../../core/models/fooditem';
import { Router } from '@angular/router';

export interface FooditemWithId extends Fooditem { $key: string; }

@Component({
  selector: 'app-fooditem-list',
  templateUrl: './fooditem-list.component.html',
  styleUrls: ['./fooditem-list.component.scss']
})
export class FooditemListComponent implements OnInit {
  isLoading = true;
  fooditems: Observable<FooditemWithId[]>;

  constructor(
    public dataService: DataService,
    private _router: Router) { }

  ngOnInit() {
    this.fooditems = this.dataService.fooditems.snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Fooditem;
          const $key = action.payload.doc.id;
          this.isLoading = false;
          return { $key, ...data };
        });
      });
  }
}
