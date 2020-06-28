import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ConfigComponent } from "./config/config.component";
import { RoomComponent } from "./room/room.component";

import { AuthGuardService } from "./service/auth-guard.service";

const routes: Routes = [
	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "dashboard",
		component: DashboardComponent,
		canActivate: [AuthGuardService],
		data: {
			expectedRole: "isuser"
		}
	},
	{
		path: "config",
		component: ConfigComponent,
		canActivate: [AuthGuardService],
		data: {
			expectedRole: "isadmin"
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
