import { Component, OnInit } from '@angular/core';
import { AberrationDatum } from 'src/app/core/models/IAberration.model';
import { AberrationService } from 'src/app/services/aberration/aberration.service';

@Component({
  selector: 'app-aberration-list',
  templateUrl: './aberration-list.component.html',
  styleUrls: ['./aberration-list.component.css'],
})
export class AberrationListComponent implements OnInit {
  constructor(private aberrationService: AberrationService) {}
  aberrations!: AberrationDatum[];
  currentPage: number = 1; // Página actual
  pageSize: number = 8; // Resultados por página
  totalResults: number = 0; // Total de resultados
  totalPages: number[] = []; // Array de páginas

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  // loadAberrations(): void {
  //   this.aberrationService.getAllAberrations().subscribe((data) => {
  //     console.log(data);

  //     this.aberrations = data.aberrationData;
  //     console.log(this.aberrations);
  //   });
  // }

  loadPage(page: number): void {
    this.aberrationService.getAllAberrations().subscribe((data) => {
      this.totalResults = data.aberrationData.length; // Total de resultados
      this.totalPages = Array.from(
        { length: Math.ceil(this.totalResults / this.pageSize) },
        (_, i) => i + 1
      ); // Generar array de páginas
    });

    this.aberrationService
      .getPaginatedAberrations(page, this.pageSize)
      .subscribe((paginatedData) => {
        this.aberrations = paginatedData;
      });
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.loadPage(this.currentPage);
  }
}
