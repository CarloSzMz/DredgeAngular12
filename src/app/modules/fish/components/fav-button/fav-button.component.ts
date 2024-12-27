import { Component, Input, OnInit } from '@angular/core';
import { FishServiceService } from 'src/app/services/fish/fish-service.service';
import { FishDatum } from 'src/app/core/models/IFish.model';

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.css'],
})
export class FavButtonComponent implements OnInit {
  @Input() pescado!: FishDatum;

  constructor(private fishService: FishServiceService) {}

  ngOnInit(): void {}

  // Método para alternar entre añadir y quitar de favoritos
  toggleFav(): void {
    const isFavourite = this.isFavorite(); // Verifica si el pez está en favoritos
    if (isFavourite) {
      this.fishService.removeFromFavourite(this.pescado.id); // Eliminar de favoritos
    } else {
      this.fishService.addToFavourite(this.pescado); // Añadir a favoritos
    }
  }

  // Método para verificar si el pez está en favoritos
  isFavorite(): boolean {
    return this.fishService.isFishInFavourite(this.pescado.id); // Usa el servicio para verificar si está en favoritos
  }
}
