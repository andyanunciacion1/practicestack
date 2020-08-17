import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ShareddataService } from "./services/shareddata.service";

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    HeroSectionComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ShareddataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
