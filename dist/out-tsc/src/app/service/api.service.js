import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
let ApiService = class ApiService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.restUrl = "http://localhost:8080";
        console.log(this.getInventory());
        this.inventoryInfo = new BehaviorSubject({ rooms: [] });
    }
    // basic auth
    getLogin(username, password) {
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
        return this.http.get(this.restUrl + "/login", headerOptions).subscribe(data => {
            // json data
            this.router.navigate(["/dashboard"]);
            console.log("Success: ", data);
        }, error => {
            this.router.navigate(["/login"]);
            console.log("Error: ", error);
        });
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
        return this.http.get(this.restUrl + "/lights", headerOptions).subscribe(data => {
            // json data
            this.inventoryInfo.next(data);
            console.log("Success: ", data);
        }, error => {
            console.log("Error: ", error);
        });
    }
    updateInventory() {
        console.log("update inventory");
        this.getInventory();
    }
    subscribeInvetory() {
        return this.inventoryInfo.asObservable();
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: "root"
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map