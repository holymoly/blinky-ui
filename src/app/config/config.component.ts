import { Component, OnInit } from "@angular/core";

import { ApiService } from "../service/api.service";

import { ConfigNodeEntryComponent } from "../config-node-entry/config-node-entry.component";

@Component({
	selector: "app-config",
	templateUrl: "./config.component.html",
	styleUrls: ["./config.component.less"]
})
export class ConfigComponent implements OnInit {
	entries = [];

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.apiService.subscribeConfig().subscribe(value => {
			this.entries = value["config"];
		});
		//this.apiService.updateInventory();
	}

	trackByFn(index, item) {
		return index;
	}
}
