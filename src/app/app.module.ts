// angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

// routes
import { AppRoutingModule } from "./app-routing.module";

// translation
import { AppTranslationModule } from "./app.translation.module";

// dependencies
import { ToastrModule } from "ngx-toastr";

// views
import { AppComponent } from "./components/main/app.component";
import { DashboardComponent } from "./views/dashboard/app.dashboard";

/**
 * Main module of the application which initiates required dependencies
 */
@NgModule({
  declarations: [AppComponent, DashboardComponent],
  exports: [],
  imports: [BrowserModule, BrowserAnimationsModule, ToastrModule.forRoot(), AppRoutingModule, HttpClientModule, AppTranslationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
