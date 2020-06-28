import {
	Component,
	OnInit,
	ViewContainerRef,
	ViewChild,
	ComponentFactoryResolver,
	Input
} from "@angular/core";

import { LightComponent } from "../light/light.component";

@Component({
	selector: "app-room",
	templateUrl: "./room.component.html",
	styleUrls: ["./room.component.less"]
})
export class RoomComponent implements OnInit {
	@Input() name: string;
	@Input() lights: object;

	control: string;
	controlRoom = true;

	constructor(private resolver: ComponentFactoryResolver) {}

	ngOnInit(): void {}

	trackByFn(index, id) {}
}
