import { Component, Input } from '@angular/core';
import { navItems } from './../../_navDemo';
import {Navigation} from '../../_navi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItemsDemo = navItems;
  public navigation = Navigation;
  public navItems: any;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public devMode: boolean;
  toggleDevMode() {
    this.navItems = [];
    this.devMode = !this.devMode;
    if(this.devMode) {
      this.navItems = this.navItemsDemo;
    } else {
      this.navItems = this.navigation;
    }
  }
  constructor() {
    this.devMode = true;
    this.navItems = this.navItemsDemo;
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
}
