import { Component, OnInit } from '@angular/core';
import { FishDatum } from 'src/app/core/models/IFish.model';
import { FishServiceService } from 'src/app/services/fish/fish-service.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css'],
})
export class FishListComponent implements OnInit {
  constructor(private fishService: FishServiceService) {}
  fish!: FishDatum[];

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    // Suscribirse al Observable de los peces filtrados
    this.fishService.filteredFish$.subscribe((filteredFish) => {
      this.fish = filteredFish;
      console.log('Peces filtrados:', this.fish);
    });

    // Si no se han aplicado filtros, puedes cargar todos los peces
    this.fishService.getAllFish().subscribe((response) => {
      this.fish = response.fishData;
    });
  }
}
