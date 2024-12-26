import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AberrationDatum } from 'src/app/core/models/IAberration.model';
import { AberrationService } from 'src/app/services/aberration/aberration.service';

@Component({
  selector: 'app-aberration-detail',
  templateUrl: './aberration-detail.component.html',
  styleUrls: ['./aberration-detail.component.css'],
})
export class AberrationDetailComponent implements OnInit {
  aberration: AberrationDatum | undefined;

  constructor(
    private route: ActivatedRoute,
    private aberrationService: AberrationService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // El id ya es un string desde la URL
    const name = this.route.snapshot.paramMap.get('name');

    if (id) {
      this.aberrationService.getAberrationById(id).subscribe(
        (aberration) => {
          this.aberration = aberration;
          console.log(this.aberration); // Verifica que el pez se haya encontrado correctamente
        },
        (error) => {
          console.error('Error al obtener el pez', error);
        }
      );
    }
    // } else if (name) {
    //   // Buscar por nombre
    //   this.fishService.getFishByName(name).subscribe(
    //     (fish) => {
    //       this.pescado = fish;
    //       console.log(this.pescado);
    //     },
    //     (error) => {
    //       console.error('Error al obtener el pez por nombre', error);
    //     }
    //   );
    // }
  }
}
