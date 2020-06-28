import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
	providedIn: "root"
})
export class AuthGuardService implements CanActivate {
	constructor(public router: Router) {}

	canActivate(route: ActivatedRouteSnapshot) {
		var roles = JSON.parse(localStorage.getItem("session"));
		console.log(roles);

		const expectedRole = route.data.expectedRole;

		if (roles.scope.includes(expectedRole)) {
			return true;
		} else {
			console.log("Denied!!!");
			return false;
		}
	}
}
