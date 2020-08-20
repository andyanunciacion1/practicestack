import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-andy-information",
  templateUrl: "./andy-information.component.html",
  styleUrls: ["./andy-information.component.css"],
})
export class AndyInformationComponent implements OnInit {
  public andyID: number;

  constructor(private router: ActivatedRoute, private routeback: Router) {}

  ngOnInit() {
    this.andyID = Number(this.router.snapshot.params["id"]);

    this.router.params.subscribe((fetchedvariable) => {
      this.andyID = +fetchedvariable["id"];
    });
  }

  onBack() {
    this.andyID--;
    this.routeback.navigate(["andy-information", this.andyID]);
  }

  onNext() {
    this.andyID++;
    this.routeback.navigate(["andy-information", this.andyID]);
    console.log("ahafadsfasdf");
  }

  Home() {
    this.routeback.navigate(["versions-of-andy"]);
  }
}
