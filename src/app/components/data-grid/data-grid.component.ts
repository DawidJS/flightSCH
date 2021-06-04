import { Component, EventEmitter, Input, Output } from "@angular/core";

import { IFlight } from "src/app/models/flight.interface";

@Component({
    selector: "data-grid",
    templateUrl: "./data-grid.component.html",
    styleUrls: ["./data-grid.component.scss"]
})
export class DataGridComponent {
    public readonly sampleHeaders = [
        "flight",
        "sch. date",
        "sch.time",
        "o/d",
        "registration"
    ];

    @Input() public rows: IFlight[] = [];
    
    @Output() public register: EventEmitter<IFlight> = new EventEmitter<IFlight>();

    registerClick(row: IFlight) {        
        this.register.emit(row);
    }

}
