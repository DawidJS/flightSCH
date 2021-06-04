import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFlight } from '../models/flight.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = '../../assets/mock-data/mockFlights.csv';

  constructor(private http: HttpClient) { }

  getData(): Observable<IFlight[]> {
    return this.http.get(this.url, { responseType: "text" })
      .pipe(
        map(data => this.stringToFlights(data))
      );

  }

  private stringToFlights(data: string): IFlight[] {
    let flights: IFlight[] = [];
    let rows = data.split("\r\n");

    for (let i = 1; i < rows.length - 1; i++) {
      let cols: string[] = rows[i].split(",");

      let flight = <IFlight>{
        id: cols[0],
        flightNumber: cols[1],
        scheduledDate: new Date(parseInt(cols[2])),
        originDestination: cols[3],
        registration: cols[4]
      };

      flights.push(flight);

    }
    return flights;
  }

}



