import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishDatum } from 'src/app/core/models/IFish.model';
import { FishServiceService } from 'src/app/services/fish/fish-service.service';

@Component({
  selector: 'app-fish-detail',
  templateUrl: './fish-detail.component.html',
  styleUrls: ['./fish-detail.component.css'],
})
export class FishDetailComponent implements OnInit {
  pescado: FishDatum | undefined;

  constructor(
    private route: ActivatedRoute,
    private fishService: FishServiceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // El id ya es un string desde la URL
    const name = this.route.snapshot.paramMap.get('name');

    if (id) {
      this.fishService.getFishById(id).subscribe(
        (fish) => {
          this.pescado = fish;
          console.log(this.pescado); // Verifica que el pez se haya encontrado correctamente
        },
        (error) => {
          console.error('Error al obtener el pez', error);
        }
      );
    } else if (name) {
      // Buscar por nombre
      this.fishService.getFishByName(name).subscribe(
        (fish) => {
          this.pescado = fish;
          console.log('Pez encontrado por nombre:', this.pescado);
        },
        (error) => {
          console.error('Error al obtener el pez por nombre', error);
        }
      );
    }
  }
}
