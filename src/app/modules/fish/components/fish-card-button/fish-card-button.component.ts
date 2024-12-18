import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishDatum } from 'src/app/core/models/IFish.model';

@Component({
  selector: 'app-fish-card-button',
  templateUrl: './fish-card-button.component.html',
  styleUrls: ['./fish-card-button.component.css'],
})
export class FishCardButtonComponent implements OnInit {
  @Input() pescado!: FishDatum;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails(): void {
    this.router.navigate([`/fishDetails/${this.pescado.id}`]);
  }
}
