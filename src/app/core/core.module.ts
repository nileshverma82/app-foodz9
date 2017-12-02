import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { RoutesService } from './routes.service';
import { AuthGuard } from './auth.guard';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [AuthService, DataService, RoutesService, AuthGuard]
})
export class CoreModule { }
