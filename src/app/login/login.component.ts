import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { pipe } from "rxjs";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string;
	error = "";

	constructor(
		private apiService: ApiService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			username: ["", Validators.required],
			password: ["", Validators.required]
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.loginForm.controls;
	}

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
		this.apiService.getLogin(this.f.username.value, this.f.password.value);
	}
}
