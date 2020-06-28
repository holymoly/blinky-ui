import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/api.service";
import { RoomComponent } from "../room/room.component";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.less"]
})
export class DashboardComponent implements OnInit {
	inventory = [];

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.apiService.subscribeInvetory().subscribe(value => {
			//console.log(value);
			this.inventory = value["rooms"];
		});
		//this.apiService.updateInventory();
	}

	updateRooms(data) {
		this.inventory = data.rooms;
		data.rooms.forEach(room => {
			console.log(room);
			//this.createRoom(room);
		});
	}

	trackByFn(index, item) {
		return index;
	}
}
