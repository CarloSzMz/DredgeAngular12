import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  getPaginatedAberrations(
    page: number,
    pageSize: number
  ): Observable<AberrationDatum[]> {
    return new Observable((observer) => {
      this.getAllAberrations().subscribe((data) => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedData = data.aberrationData.slice(startIndex, endIndex);
        observer.next(paginatedData);
        observer.complete();
      });
    });
  }

  getAberrationById(id: string): Observable<AberrationDatum | undefined> {
    return this.httpClient.get<IAberration>(this.urlAberration).pipe(
      map((response) =>
        response.aberrationData.find((aberration) => aberration.id === id)
      ) // Buscar por id dentro de aberrationData
    );
  }
}
