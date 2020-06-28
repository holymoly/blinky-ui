import { __decorate } from "tslib";
import { Component, ViewContainerRef, ViewChild } from "@angular/core";
import { LightComponent } from "../light/light.component";
let RoomComponent = class RoomComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() { }
    createLight() {
        const factory = this.resolver.resolveComponentFactory(LightComponent);
        const componentRef = this.container.createComponent(factory);
    }
};
__decorate([
    ViewChild("lightContainer", { read: ViewContainerRef })
], RoomComponent.prototype, "container", void 0);
RoomComponent = __decorate([
    Component({
        selector: "app-room",
        templateUrl: "./room.component.html",
        styleUrls: ["./room.component.less"]
    })
], RoomComponent);
export { RoomComponent };
//# sourceMappingURL=room.component.js.map