import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElectricalMeter} from 'src/app/models/ElectricMeter.model';

@Injectable({
  providedIn: 'root'
})
export class EletricalMeterService {

  baseUrl: string = 'http://localhost:3000/electrical-meter';

  constructor(private http: HttpClient) { }

  getEM(): Observable<ElectricalMeter[]> {
    return this.http.get<ElectricalMeter[]>(this.baseUrl);
  }

  getEMById(id: number): Observable<ElectricalMeter> {
    return this.http.get<ElectricalMeter>(this.baseUrl + '/' + id);
  }

  createEM(eM: ElectricalMeter):Observable<ElectricalMeter> {
    return this.http.post<ElectricalMeter>(this.baseUrl, eM);
  }

  updateEM(eM: ElectricalMeter):Observable<ElectricalMeter> {
    return this.http.put<ElectricalMeter>(this.baseUrl + '/' + eM.id, eM);
  }

  deleteEM(id: number): Observable<ElectricalMeter> {
    return this.http.delete<ElectricalMeter>(this.baseUrl + '/' + id);
  }
}
