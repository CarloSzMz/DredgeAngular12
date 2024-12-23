import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AberrationDatum,
  IAberration,
} from 'src/app/core/models/IAberration.model';

@Injectable({
  providedIn: 'root',
})
export class AberrationService {
  private urlAberration: string = 'assets/data/AberrationData.json';
  private filteredAberrationSubject = new BehaviorSubject<AberrationDatum[]>(
    []
  ); // Para manejar la lista filtrada
  filteredAberration$ = this.filteredAberrationSubject.asObservable(); // Observable para suscribirse

  constructor(private httpClient: HttpClient) {}

  getAllAberrations(): Observable<IAberration> {
    return this.httpClient.get<IAberration>(this.urlAberration);
  }
}
