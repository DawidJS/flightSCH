import { Component, Input } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";
import { DataService } from "src/app/Services/data.service";

@Component({
    selector: "grid-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class GridHeaderComponent {
    @Input() public headers!: string[];

    
  

}


