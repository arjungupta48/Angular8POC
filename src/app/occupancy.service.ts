import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOccupancy } from './occupancy';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class OccupancyService {

  private _url: string = "/assets/data/occupancy.json";

  constructor(private _http: HttpClient) { }

  getOccupancyNames(): Observable<IOccupancy> {
    return this._http.get<IOccupancy>(this._url);

  }
}
