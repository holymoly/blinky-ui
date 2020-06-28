import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LightComponent } from "./light/light.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "light",
        component: LightComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map