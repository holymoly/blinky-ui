import { Component, OnInit, Input } from "@angular/core";

import { ApiService } from "../service/api.service";

@Component({
	selector: "app-config-node-entry",
	templateUrl: "./config-node-entry.component.html",
	styleUrls: ["./config-node-entry.component.less"]
})
export class ConfigNodeEntryComponent implements OnInit {
	@Input() id: string;
	@Input() name: string;
	@Input() room: string;
	@Input() leds: number;
	@Input() type: string;

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {}

	update() {
		this.apiService.updateNodeConfig({
			device_id: this.id,
			device_name: this.name,
			device_room: this.room,
			device_leds: this.leds
		});
	}

	create() {
		this.apiService.createNodeConfig({
			device_id: this.id,
			device_name: this.name,
			device_room: this.room,
			device_leds: this.leds
		});
	}
}
