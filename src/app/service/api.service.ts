import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable, interval } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ApiService {
	restUrl = "http://localhost:8000";
	private inventoryInfo: BehaviorSubject<object>;
	private configInfo: BehaviorSubject<object>;
	sourceInventory = interval(10000);
	sourceConfig = interval(10000);

	constructor(private http: HttpClient, private router: Router) {
		console.log(this.getInventory());
		this.inventoryInfo = new BehaviorSubject<object>({ rooms: [] });
		this.configInfo = new BehaviorSubject<object>({ config: [] });
		const subscribeInventory = this.sourceInventory.subscribe(val =>
			this.updateInventory()
		);
		const subscribeConfig = this.sourceConfig.subscribe(val =>
			this.updateConfig()
		);
	}

	// basic auth
	getLogin(username: string, password: string) {
		// build header
		let authorizationData = "Basic " + window.btoa(username + ":" + password);

		var headerOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
				Authorization: authorizationData
			}),
			withCredentials: true
		};

		//execute basic auth request
		return this.http.get(this.restUrl + "/login", headerOptions).subscribe(
			data => {
				// json data
				localStorage.setItem("session", JSON.stringify(data));
				this.router.navigate(["/dashboard"]);
				console.log("Success: ", data);
			},
			error => {
				this.router.navigate(["/login"]);
				console.log("Error: ", error);
			}
		);
	}

	// basic auth
	getNodeConfig() {
		// build header
		var headerOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			}),
			withCredentials: true
		};

		//execute basic auth request
		return this.http.get(this.restUrl + "/config", headerOptions).subscribe(
			data => {
				// json data
				this.configInfo.next(data);
				console.log("Success: ", data);
			},
			error => {
				console.log("Error: ", error);
			}
		);
	}

	updateNodeConfig(data) {
		// build header
		var headerOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			}),
			withCredentials: true
		};

		//execute basic auth request
		return this.http
			.post(this.restUrl + "/config/update", data, headerOptions)
			.subscribe(
				data => {
					// json data
					console.log("Success: ", data);
				},
				error => {
					console.log("Error: ", error);
				}
			);
	}

	createNodeConfig(data) {
		// build header
		var headerOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			}),
			withCredentials: true
		};

		//execute basic auth request
		return this.http
			.post(this.restUrl + "/config/create", data, headerOptions)
			.subscribe(
				data => {
					// json data
					console.log("Success: ", data);
				},
				error => {
					console.log("Error: ", error);
				}
			);
	}

	// get inventory
	getInventory() {
		// build header
		var headerOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			}),
			withCredentials: true
		};

		//execute basic auth request
		return this.http.get(this.restUrl + "/lights", headerOptions).subscribe(
			data => {
				// json data
				this.inventoryInfo.next(data);
				console.log("Success: ", data);
			},
			error => {
				console.log("Error: ", error);
			}
		);
	}

	setModeLight(room, light, data) {
		// build header
		var headerOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			}),
			withCredentials: true
		};

		var url = this.restUrl + "/lights/" + room + "/" + light;
		console.log(light);
		if (light === undefined) {
			url = this.restUrl + "/lights/" + room;
		}

		//execute basic auth request
		return this.http.post(url, data, headerOptions).subscribe(
			data => {
				// json data
				console.log("Success: ", data);
			},
			error => {
				console.log("Error: ", error);
			}
		);
	}

	updateInventory(): void {
		console.log("update inventory");
		this.getInventory();
	}

	updateConfig(): void {
		console.log("update config");
		this.getNodeConfig();
	}

	subscribeInvetory(): Observable<object> {
		return this.inventoryInfo.asObservable();
	}

	subscribeConfig(): Observable<object> {
		return this.configInfo.asObservable();
	}
}
