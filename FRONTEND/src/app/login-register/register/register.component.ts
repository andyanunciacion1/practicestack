import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { count } from "rxjs/operators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.maxLength(16),
          Validators.minLength(8),
          Validators.required,
        ]),
        confpass: new FormControl(null, [Validators.required]),
      },
      //pwedeng wala yung this.registration, matic read nung form group sa taas
      this.customValidation
    );
  }

  // Cross Validation from two fields : return null kung true return yung error pag false
  customValidation(VariablenameofForm: FormGroup): Validators {
    return VariablenameofForm.get("password").value ===
      VariablenameofForm.get("confpass").value
      ? null
      : { HindiPareho: true };
  }

  //getters
  get userName() {
    return this.registrationForm.get("userName") as FormControl;
  }
  get email() {
    return this.registrationForm.get("email") as FormControl;
  }
  get password() {
    return this.registrationForm.get("password") as FormControl;
  }
  get confpass() {
    return this.registrationForm.get("confpass") as FormControl;
  }

  regSubmit() {
    console.log(this.registrationForm);
  }
}
