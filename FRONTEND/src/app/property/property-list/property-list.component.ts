import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit {
  Andy: Array<any> = [
    {
      Id: 1,
      Name: "Present Andy",
      Age: 23,
      Gender: "Male",
      Address: "Angeles City",
      Image:"assets/images/present-andy",
    },
    {
      Id: 2,
      Name: "Tito Andy",
      Age: 46,
      Gender: "Male",
      Address: "Angeles City",
      Image:"assets/images/tito-andy",
    },
    {
      Id: 3,
      Name: "Lolo Andy",
      Age: 88,
      Gender: "Male",
      Address: "Angeles City",
      Image:"assets/images/lolo-andy",
    },


  ];
  constructor() {}

  ngOnInit() {}
}
