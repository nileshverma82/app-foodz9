import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { DataService, AppUser } from '../core/data.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public _authService: AuthService) { }
  private user: Observable<AppUser>;

  ngOnInit() {
  }

}
