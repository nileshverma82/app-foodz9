import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// food item components imports
import { FooditemListComponent } from './fooditem-list/fooditem-list.component';
import { FooditemDetailComponent } from './fooditem-detail/fooditem-detail.component';
import { FooditemModifyComponent } from './fooditem-modify/fooditem-modify.component';
import { FooditemNewComponent } from './fooditem-new/fooditem-new.component';
import { AppFoodItemRoutingModule } from './fooditem-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../core/data.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppFoodItemRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FooditemListComponent,
    FooditemDetailComponent, FooditemModifyComponent, FooditemNewComponent],
  providers: [DataService]
})
export class FooditemModule { }
