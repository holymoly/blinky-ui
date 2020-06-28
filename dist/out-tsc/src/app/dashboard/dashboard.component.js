import { __decorate } from "tslib";
import { Component, ViewContainerRef, ViewChild } from "@angular/core";
import { RoomComponent } from "../room/room.component";
let DashboardComponent = class DashboardComponent {
    constructor(resolver, apiService) {
        this.resolver = resolver;
        this.apiService = apiService;
        this.inventory = {};
    }
    ngOnInit() {
        this.apiService.subscribeInvetory().subscribe(value => {
            //this.inventory = value;
            this.updateRooms(value);
        });
        //this.apiService.updateInventory();
    }
    createRoom(name) {
        const factory = this.resolver.resolveComponentFactory(RoomComponent);
        const componentRef = this.container.createComponent(factory);
    }
    updateRooms(data) {
        data.rooms.forEach(room => {
            this.createRoom(room);
        });
    }
};
__decorate([
    ViewChild("roomContainer", { read: ViewContainerRef })
], DashboardComponent.prototype, "container", void 0);
DashboardComponent = __decorate([
    Component({
        selector: "app-dashboard",
        templateUrl: "./dashboard.component.html",
        styleUrls: ["./dashboard.component.less"]
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map