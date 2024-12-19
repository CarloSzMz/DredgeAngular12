import { Component, OnInit } from '@angular/core';
import { FishDatum } from 'src/app/core/models/IFish.model';
import { FishServiceService } from 'src/app/services/fish/fish-service.service';

@Component({
  selector: 'app-fish-filters',
  templateUrl: './fish-filters.component.html',
  styleUrls: ['./fish-filters.component.css'],
})
export class FishFiltersComponent implements OnInit {
  fishData: FishDatum[] = [];
  filteredFish: FishDatum[] = [];

  selectedLocations: { [key: string]: boolean } = {
    'The Marrows': false,
    'Gale Cliffs': false,
    'Open Ocean': false,
    'Stellar Basin': false,
    "Devil's Spine": false,
    'Pale Reach': false,
    'Twisted Strand': false,
  };

  selectedTimes: { [key: string]: boolean } = {
    Day: false,
    Night: false,
    Any: false,
  };

  selectedCaptureMethods: { [key: string]: boolean } = {
    rod: false,
    trawl: false,
    pot: false,
  };

  times: string[] = ['Day', 'Night', 'Any'];

  captureMethods: string[] = ['rod', 'trawl', 'pot'];

  constructor(private fishService: FishServiceService) {}

  ngOnInit(): void {
    this.fishService.getAllFish().subscribe((data) => {
      this.fishData = data.fishData;
      this.filteredFish = this.fishData; // Inicialmente no se filtra nada
    });
  }

  // Handler for form submission
  sendFilters(): void {
    // Obtener las ubicaciones, tiempos y métodos de captura seleccionados
    const selectedLocations = Object.keys(this.selectedLocations).filter(
      (location) => this.selectedLocations[location]
    );
    const selectedTimes = Object.keys(this.selectedTimes).filter(
      (time) => this.selectedTimes[time]
    );
    const selectedCaptureMethods = Object.keys(
      this.selectedCaptureMethods
    ).filter((method) => this.selectedCaptureMethods[method]);

    // Filtrar los peces según los filtros seleccionados
    this.filteredFish = this.fishService.filterFish(
      this.fishData,
      selectedLocations,
      selectedTimes,
      selectedCaptureMethods
    );

    // Mostrar los resultados filtrados en consola (opcional)
    console.log('Filtered Fish:', this.filteredFish);
  }
}
