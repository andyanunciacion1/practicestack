import { Component, OnInit, Type, Input } from "@angular/core";
import { PropertyInterface } from "src/app/interfaces/propertyInterface";

@Component({
  selector: "app-property-card",
  templateUrl: "./property-card.component.html",
  styleUrls: ["./property-card.component.css"],
})
export class PropertyCardComponent implements OnInit {
  @Input() lipat: PropertyInterface;

  constructor() {}

  ngOnInit(): void {}
}
