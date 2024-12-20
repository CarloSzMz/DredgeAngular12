import { Component, OnInit } from '@angular/core';
import { FishDatum } from 'src/app/core/models/IFish.model';
import { FishServiceService } from 'src/app/services/fish/fish-service.service';

@Component({
  selector: 'app-fish-filters',
  templateUrl: './fish-filters.component.html',
  styleUrls: ['./fish-filters.component.css'],
})
export class FishFiltersComponent {
  // Listas de opciones (pueden venir del servicio o ser estáticas)
  locationsList = [
    'The Marrows',
    'Gale Cliffs',
    'Open Ocean',
    'Stellar Basin',
    "Devil's Spine",
    'The Pale Reach',
    'Twisted Strand',
  ];
  timeList = ['Day', 'Night', 'Any'];
  captureMethodsList = ['rod', 'trawl', 'pot'];

  selectedLocations: { [key: string]: boolean } = {};
  selectedTimes: { [key: string]: boolean } = {};
  selectedCaptureMethods: { [key: string]: boolean } = {};

  constructor(private fishService: FishServiceService) {}

  sendFilters() {
    // Filtrar las ubicaciones, tiempos y métodos de captura seleccionados
    const selectedLocations = Object.keys(this.selectedLocations).filter(
      (location) => this.selectedLocations[location]
    );
    const selectedTimes = Object.keys(this.selectedTimes).filter(
      (time) => this.selectedTimes[time]
    );
    const selectedCaptureMethods = Object.keys(
      this.selectedCaptureMethods
    ).filter((method) => this.selectedCaptureMethods[method]);

    // Llamar al servicio para filtrar los peces y actualizar el estado
    this.fishService.getAllFishData().subscribe((fishData) => {
      const filteredFish = this.fishService.filterFish(
        fishData,
        selectedLocations,
        selectedTimes,
        selectedCaptureMethods
      );
    });
  }
  clearFilters() {
    this.selectedLocations = {};
    this.selectedTimes = {};
    this.selectedCaptureMethods = {};
  }
}
