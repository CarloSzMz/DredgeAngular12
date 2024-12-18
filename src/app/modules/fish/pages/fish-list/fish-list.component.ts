import { Component, OnInit } from '@angular/core';
import { FishServiceService } from 'src/app/services/fish/fish-service.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css'],
})
export class FishListComponent implements OnInit {
  constructor(private fishService: FishServiceService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.fishService.getAllFish().subscribe((response) => {
      console.log(response);
    });
  }
}
