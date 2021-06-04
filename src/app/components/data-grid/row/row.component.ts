import { Component, EventEmitter, Input, Output } from "@angular/core";

import { IFlight } from "src/app/models/flight.interface";

@Component({
    selector: "data-row",
    templateUrl: "./row.component.html",
    styleUrls: ["./row.component.scss"]
})
export class RowComponent {
    @Input() public row!: IFlight;
    @Output()
    public register: EventEmitter<IFlight> = new EventEmitter<IFlight>();

    registerClick(row: IFlight) {        
        this.register.emit(row);
    }
}
