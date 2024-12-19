import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FishDatum, IFish } from 'src/app/core/models/IFish.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FishServiceService {
  private url: string = 'assets/data/fishData.json';

  constructor(private httpClient: HttpClient) {}

  getAllFishData(): Observable<FishDatum[]> {
    return this.httpClient.get<IFish>(this.url).pipe(
      map((data) => data.fishData) // Mapeamos para devolver el array fishData
    );
  }

  getAllFish(): Observable<IFish> {
    return this.httpClient.get<IFish>(this.url);
  }

  getFishById(id: string): Observable<FishDatum | undefined> {
    return this.httpClient.get<IFish>(this.url).pipe(
      map((response) => response.fishData.find((fish) => fish.id === id)) // Buscar por id dentro de fishData
    );
  }

  getFishByName(name: string): Observable<FishDatum | undefined> {
    return this.getAllFishData().pipe(
      map((fishData) =>
        fishData.find((fish) => fish.name.toLowerCase() === name.toLowerCase())
      )
    );
  }
}
