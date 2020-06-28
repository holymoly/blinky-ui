import { Component, OnInit, Input } from "@angular/core";
import { LightModes } from "../light-modes";

import { ApiService } from "../service/api.service";

@Component({
	selector: "app-light",
	templateUrl: "./light.component.html",
	styleUrls: ["./light.component.less"]
})
export class LightComponent implements OnInit {
	@Input() name: string;
	@Input() room: string;
	@Input() colorValue: string;

	selectedItem: string;
	resetChecked = false;
	debugChecked = true;

	selectedColor: string;

	red: number = 10;
	green: number = 15;
	blue: number = 20;

	speed: number = 20;

	lightModes: LightModes[] = [
		{ value: "none", viewValue: "none" },
		{ value: "RAINBOW", viewValue: "Rainbow" },
		{ value: "BLINK", viewValue: "Blink" },
		{ value: "BALL", viewValue: "Balls" },
		{ value: "KIT", viewValue: "Kit" },
		{ value: "MANUAL", viewValue: "Manual" }
	];

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.selectedItem = "none";
	}

	update() {
		this.apiService.setModeLight(this.room, this.name, {
			type: "cmd",
			cmd: "setProgram",
			value: this.selectedItem,
			red: this.red.toString(),
			green: this.green.toString(),
			blue: this.blue.toString(),
			speed: this.speed.toString()
		});
	}

	resetWifi() {
		this.apiService.setModeLight(this.room, this.name, {
			type: "cmd",
			cmd: "wifiReset"
		});
	}

	debugCmd() {
		const cmd = {
			type: "cmd",
			cmd: "debug",
			value: this.debugChecked ? "on" : "off"
		};
		console.log(cmd);
		this.apiService.setModeLight(this.room, this.name, cmd);
	}

	async updateColor() {
		console.log(this.colorValue);
		await this.colorHexToRgb(this.colorValue);
		this.apiService.setModeLight(this.room, this.name, {
			type: "cmd",
			cmd: "setProgram",
			value: "MANUAL",
			red: this.red.toString(),
			green: this.green.toString(),
			blue: this.blue.toString()
		});
	}

	colorHexToRgb(h) {
		// 3 digits
		if (h.length == 4) {
			this.red = parseInt("0x" + h[1] + h[1]);
			this.green = parseInt("0x" + h[2] + h[2]);
			this.blue = parseInt("0x" + h[3] + h[3]);

			// 6 digits
		} else if (h.length == 7) {
			this.red = parseInt("0x" + h[1] + h[2]);
			this.green = parseInt("0x" + h[3] + h[4]);
			this.blue = parseInt("0x" + h[5] + h[6]);
		}
	}
}
