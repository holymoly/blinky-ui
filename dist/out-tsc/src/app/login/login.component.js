import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
let LoginComponent = class LoginComponent {
    constructor(apiService, formBuilder, router) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.error = "";
    }
    ngOnInit() {
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
};
LoginComponent = __decorate([
    Component({
        selector: "app-login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.less"]
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map