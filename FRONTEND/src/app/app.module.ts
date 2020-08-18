import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ShareddataService } from "./services/shareddata.service";
import { CreateAndyComponent } from "./property/create-andy/create-andy.component";

const appRoutes: Routes = [
  { path: "", component: HeroSectionComponent },
  { path: "versions-of-andy", component: PropertyListComponent },
  { path: "create-your-andy", component: CreateAndyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    HeroSectionComponent,
    CreateAndyComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [ShareddataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
