import { Component, OnInit } from "@angular/core";
import { ShareddataService } from "src/app/services/shareddata.service";
import { PropertyInterface } from "src/app/interfaces/propertyInterface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit {
  GenM: string = "Male";
  GenF: string = "Female";
  Gen: string;

  Andy: PropertyInterface[];

  constructor(
    private route: ActivatedRoute,
    private mgaData: ShareddataService
  ) {}

  ngOnInit() {
    this.Gen = this.route.snapshot.params["gender"];
    this.route.params.subscribe((newurl) => {
      this.Gen = newurl["gender"];
      this.mgaData.kuhaData(this.Gen).subscribe(
        (data) => {
          if (data) this.Andy = data;
        },
        (mali) => {
          console.log(mali);
        }
      );
    });
  }
}
