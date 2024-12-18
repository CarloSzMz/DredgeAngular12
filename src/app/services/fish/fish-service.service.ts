import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FishDatum, IFish } from 'src/app/core/models/IFish.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FishServiceService {
  constructor(private httpClient: HttpClient) {}

  getAllFish(): Observable<IFish> {
    return this.httpClient.get<IFish>('assets/data/fishData.json');
  }

  getFishById(id: string): Observable<FishDatum | undefined> {
    return this.httpClient.get<IFish>('assets/data/fishData.json').pipe(
      map((response) => response.fishData.find((fish) => fish.id === id)) // Buscar por id dentro de fishData
    );
  }
}
