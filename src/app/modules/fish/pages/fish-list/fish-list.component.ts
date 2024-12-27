import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishDatum } from 'src/app/core/models/IFish.model';
import { FishServiceService } from 'src/app/services/fish/fish-service.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css'],
})
export class FishListComponent implements OnInit {
  constructor(
    private fishService: FishServiceService,
    private route: ActivatedRoute
  ) {}
  fish!: FishDatum[];

  ngOnInit(): void {
    // Suscribirse al Observable de los peces filtrados
    this.fishService.filteredFish$.subscribe((filteredFish) => {
      this.fish = filteredFish;
      console.log('Peces filtrados:', this.fish);
    });

    // Suscribirse a los cambios en los parámetros de la URL
    this.route.paramMap.subscribe((paramMap) => {
      const name = paramMap.get('name');

      if (name) {
        this.buscarPorNombre(name);
      } else {
        this.cargarDatos();
      }
    });
  }

  buscarPorNombre(name: string): void {
    this.fishService.getFishByName(name).subscribe(
      (fishArray) => {
        this.fish = fishArray;
        console.log('Peces encontrados por nombre:', this.fish);
      },
      (error) => {
        console.error('Error al obtener peces por nombre', error);
      }
    );
  }

  cargarDatos() {
    // Si no se han aplicado filtros, puedes cargar todos los peces
    this.fishService.getAllFish().subscribe((response) => {
      this.fish = response.fishData;
    });
  }
}
