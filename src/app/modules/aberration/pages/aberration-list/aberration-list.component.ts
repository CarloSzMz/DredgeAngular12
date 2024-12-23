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

  ngOnInit(): void {
    this.loadAberrations();
  }

  loadAberrations(): void {
    this.aberrationService.getAllAberrations().subscribe((data) => {
      console.log(data);

      this.aberrations = data.aberrationData;
      console.log(this.aberrations);
    });
  }
}
