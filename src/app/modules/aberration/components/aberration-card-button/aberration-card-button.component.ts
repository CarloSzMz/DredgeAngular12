import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AberrationDatum } from 'src/app/core/models/IAberration.model';

@Component({
  selector: 'app-aberration-card-button',
  templateUrl: './aberration-card-button.component.html',
  styleUrls: ['./aberration-card-button.component.css'],
})
export class AberrationCardButtonComponent implements OnInit {
  @Input() aberration!: AberrationDatum;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails(): void {
    this.router.navigate([`/aberrationDetails/${this.aberration.id}`]);
  }
}
