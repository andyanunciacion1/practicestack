import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-andy",
  templateUrl: "./create-andy.component.html",
  styleUrls: ["./create-andy.component.css"],
})
export class CreateAndyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  FormSubmit(YungIdgalingsaForm: NgForm) {
    console.log(YungIdgalingsaForm);
  }
}
