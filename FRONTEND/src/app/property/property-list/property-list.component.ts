import { Component, OnInit } from "@angular/core";
import { ShareddataService } from "src/app/services/shareddata.service";
import { PropertyInterface } from "src/app/interfaces/propertyInterface";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit {
  Andy: Array<PropertyInterface>;

  constructor(private mgaData: ShareddataService) {}

  ngOnInit() {
    this.mgaData.kuhaData().subscribe(
      (data) => {
        this.Andy = data;
      },
      (mali) => {
        console.log(mali);
      }
    );
  }
}
