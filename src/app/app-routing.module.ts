import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { LightComponent } from "./light/light.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
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

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
