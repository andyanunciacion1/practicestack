import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ShareddataService } from "./services/shareddata.service";
import { CreateAndyComponent } from "./property/create-andy/create-andy.component";
import { AndyInformationComponent } from "./property/andy-information/andy-information.component";
import { PageNotFoundComponent } from "./property/page-not-found/page-not-found.component";
import { RegisterComponent } from "./login-register/register/register.component";
import { LoginComponent } from "./login-register/login/login.component";

const appRoutes: Routes = [
  { path: "", component: HeroSectionComponent },
  { path: "versions-of-andy", component: PropertyListComponent },
  { path: "versions-of-andy/:gender", component: PropertyListComponent },
  { path: "create-your-andy", component: CreateAndyComponent },
  { path: "register", component: RegisterComponent },
  { path: "andy-information/:id", component: AndyInformationComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    HeroSectionComponent,
    CreateAndyComponent,
    AndyInformationComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ShareddataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
