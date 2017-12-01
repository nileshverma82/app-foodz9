import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// food item components imports
import { FooditemListComponent } from './fooditem-list/fooditem-list.component';
import { FooditemDetailComponent } from './fooditem-detail/fooditem-detail.component';
import { FooditemModifyComponent } from './fooditem-modify/fooditem-modify.component';
import { FooditemNewComponent } from './fooditem-new/fooditem-new.component';
import { AppFoodItemRoutingModule } from './fooditem-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppFoodItemRoutingModule
  ],
  declarations: [FooditemListComponent,
    FooditemDetailComponent, FooditemModifyComponent, FooditemNewComponent]
})
export class FooditemModule { }
