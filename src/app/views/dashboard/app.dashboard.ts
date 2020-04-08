import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';

/**
 * Main controller for route "/dashboard")
 */
@Component({
  selector: 'app-dashboard-view',
  templateUrl: './app.dashboard.html',
  styleUrls: ['./app.dashboard.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  /**
   * Declaring subscription array which is holding subscriptions of this controller.
   * Subscriptions are destroyed when controller is disposed
   */
  // private subscriptions: Subscription[] = new Array();

  constructor() {
    console.log('Dashboard');
    // this.subscriptions = new Array();
  }

  /**
   * Method of interface OnInit
   */
  public ngOnInit(): void {
    console.log('Dashboard ngOnInit');
  }

  /**
   * Method of interface OnDestroy
   */
  public ngOnDestroy(): void {
    console.log('Dashboard ngOnDestroy');
  }
}
