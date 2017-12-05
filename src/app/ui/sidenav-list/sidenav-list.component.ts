import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  template: `
    <mat-nav-list>
        <mat-list-item *ngFor="let sidenavMenuItem of sidenavMenuItems">
        <mat-icon>{{ sidenavMenuItem.menuIcon }}</mat-icon>
        {{ sidenavMenuItem.menuName }}
        </mat-list-item>
    </mat-nav-list>
  `,
  styles: []
})
export class SidenavListComponent implements OnInit {

  sidenavMenuItems = [
    { menuIcon: 'home', menuName: 'Home', menuRoute: './' },
    { menuIcon: 'add_box', menuName: 'My Orders', menuRoute: './' },
    { menuIcon: 'shopping_cart', menuName: 'Cart', menuRoute: './' },
    { menuIcon: 'history', menuName: 'Wish List', menuRoute: './' },
    { menuIcon: 'help', menuName: 'Language', menuRoute: './' },
    { menuIcon: 'get_app', menuName: 'Download App', menuRoute: './' },
    { menuIcon: 'feedback', menuName: 'Help', menuRoute: './' },
    { menuIcon: 'feedback', menuName: 'Feedback', menuRoute: './' },
  ];

  constructor() { }

  ngOnInit() {
  }





}