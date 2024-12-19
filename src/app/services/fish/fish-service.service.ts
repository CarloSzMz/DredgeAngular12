import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CaptureMethods,
  FishDatum,
  IFish,
  Pot,
} from 'src/app/core/models/IFish.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FishServiceService {
  private url: string = 'assets/data/fishData.json';
  private filteredFishSubject = new BehaviorSubject<FishDatum[]>([]); // Para manejar la lista filtrada
  filteredFish$ = this.filteredFishSubject.asObservable(); // Observable para suscribirse

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

  setFilteredFish(fishData: FishDatum[]): void {
    this.filteredFishSubject.next(fishData); // Actualiza la lista filtrada
  }

  filterFish(
    fishData: FishDatum[],
    selectedLocations: string[],
    selectedTimes: string[],
    selectedCaptureMethods: string[]
  ): FishDatum[] {
    const filtered = fishData.filter((fish) => {
      const locationMatches =
        selectedLocations.length === 0 ||
        selectedLocations.includes(fish.location);
      const timeMatches =
        selectedTimes.length === 0 || selectedTimes.includes(fish.time);
      const captureMatches =
        selectedCaptureMethods.length === 0 ||
        selectedCaptureMethods.some(
          (method) =>
            fish.captureMethods[method as keyof CaptureMethods] === Pot.Yes
        );

      return locationMatches && timeMatches && captureMatches;
    });

    // Actualizamos la lista filtrada
    this.setFilteredFish(filtered);
    console.log(filtered);

    return filtered;
  }
}
