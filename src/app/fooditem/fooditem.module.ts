import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// food item components imports

import { AppFoodItemRoutingModule, routingComponents } from './fooditem-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppFoodItemRoutingModule
  ],
  declarations: [routingComponents]
})
export class FooditemModule { }
