import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./components/main/app.component";
import { DashboardComponent } from "./views/dashboard/app.dashboard";

const routes: Routes = [
  {
    path: "home",
    component: DashboardComponent,
    data: { title: "Home - test project" },
  },
  {
    path: "**",
    component: AppComponent,
    data: { title: "Home - test project" },
  },
];

/**
 * Main routing class which initiates routes
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
