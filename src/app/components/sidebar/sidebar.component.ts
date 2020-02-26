import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home-page', title: 'Home Page', icon: 'person', class: '' },
  { path: '/check-service', title: 'Check Services', icon: 'dashboard', class: '' },
  { path: '/service-list', title: 'Service List', icon: 'content_paste', class: '' },

  { path: '/e-mail', title: 'E-Mail', icon: 'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
