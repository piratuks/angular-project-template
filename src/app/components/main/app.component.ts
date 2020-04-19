import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd, RouterEvent, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";
import { Title } from "@angular/platform-browser";
import "rxjs/add/operator/filter";
import { take } from "rxjs/operators";

/**
 * Main controller for route "/")
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  /**
   * Declaring subscription array which is holding subscriptions of this controller.
   * Subscriptions are destroyed when controller is disposed
   */
  private subscriptions: Subscription[] = new Array();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    console.log("AppComponent");
    this.subscriptions = new Array();
  }

  /**
   * Method of interface OnInit
   */
  public ngOnInit(): void {
    console.log("AppComponent ngOnInit");

    const routeSubscriber: Subscription = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute.firstChild.data.pipe(take(1)).subscribe((val: any) => {
          this.titleService.setTitle(val.title);
        });
      }
    });
    this.subscriptions.push(routeSubscriber);
  }

  /**
   * Method of interface OnDestroy
   */
  public ngOnDestroy(): void {
    console.log("AppComponent ngOnDestroy");
    this.subscriptions.forEach((item: Subscription) => {
      if (item) {
        item.unsubscribe();
      }
    });
  }
}
