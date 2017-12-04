import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooditemListComponent } from './fooditem-list/fooditem-list.component';
import { FooditemDetailComponent } from './fooditem-detail/fooditem-detail.component';
import { FooditemModifyComponent } from './fooditem-modify/fooditem-modify.component';
import { FooditemNewComponent } from './fooditem-new/fooditem-new.component';

const fooditemRoutes: Routes = [
    { path: 'fooditemlist', component: FooditemListComponent},
    { path: 'details/:id', component: FooditemDetailComponent},
    { path: 'modify', component: FooditemModifyComponent },
    { path: 'addfooditem', component: FooditemNewComponent }];
@NgModule({
    imports: [RouterModule.forChild(fooditemRoutes)],
    exports: [RouterModule]
})
export class AppFoodItemRoutingModule { }

