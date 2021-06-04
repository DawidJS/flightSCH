import { OnInit } from "@angular/core";
import { Component } from "@angular/core";

import { IFlight } from "src/app/models/flight.interface";
import { DataService } from "./Services/data.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    public data: IFlight[] = [];

    currentFlight?: IFlight;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getData().subscribe(
            flights => this.data = flights,
            err => console.log('Blad', err),
        );
    }

    registerFlight(event: IFlight) {
        this.currentFlight = event
    }

    closeModal(){
        this.currentFlight=undefined;
    }

}
