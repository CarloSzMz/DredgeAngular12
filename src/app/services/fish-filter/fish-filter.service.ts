import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CaptureMethods,
  FishDatum,
  IFish,
  Pot,
} from 'src/app/core/models/IFish.model';

@Injectable({
  providedIn: 'root',
})
export class FishFilterService {
  private url: string = 'assets/data/fishData.json';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los peces desde el JSON
  getFishData(): Observable<IFish> {
    return this.http.get<IFish>(this.url);
  }

  filterFish(
    fishData: FishDatum[],
    selectedLocations: string[],
    selectedTimes: string[],
    selectedCaptureMethods: string[] // Ahora pasamos estos valores directamente
  ): FishDatum[] {
    return fishData.filter((fish) => {
      // Filtrar por ubicación
      const locationMatches =
        selectedLocations.length === 0 ||
        selectedLocations.includes(fish.location);

      // Filtrar por tiempo
      const timeMatches =
        selectedTimes.length === 0 || selectedTimes.includes(fish.time);

      // Filtrar por método de captura
      const captureMatches =
        selectedCaptureMethods.length === 0 ||
        selectedCaptureMethods.some((method) => {
          // Comprobamos si el método de captura seleccionado es "yes" en el objeto captureMethods
          return (
            fish.captureMethods[method as keyof CaptureMethods] === Pot.Yes
          );
        });

      return locationMatches && timeMatches && captureMatches;
    });
  }
}
