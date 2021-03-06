import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooditemModule } from './fooditem/fooditem.module';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MaterialModule } from './material/material.module';
import { AppToolbarComponent } from './ui/app-toolbar/app-toolbar.component';
import { FabActionComponent } from './ui/fab-action/fab-action.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { RangeSliderComponent } from './ui/range-slider/range-slider.component';
import { SidenavListComponent } from './ui/sidenav-list/sidenav-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserProfileComponent,
    AppToolbarComponent,
    FabActionComponent,
    LoadingSpinnerComponent,
    RangeSliderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooditemModule,
    CoreModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFirestoreModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
