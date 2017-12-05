import { Component } from '@angular/core';
import { RoutesService } from './core/routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
   showAppToolBar = true;
   fabAction = true;
  constructor(private _routerService: RoutesService) { }
}
