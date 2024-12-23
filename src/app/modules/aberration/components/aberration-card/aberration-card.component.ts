import { Component, Input, OnInit } from '@angular/core';
import { AberrationDatum } from 'src/app/core/models/IAberration.model';

@Component({
  selector: 'app-aberration-card',
  templateUrl: './aberration-card.component.html',
  styleUrls: ['./aberration-card.component.css'],
})
export class AberrationCardComponent implements OnInit {
  @Input() aberration!: AberrationDatum;

  constructor() {}

  ngOnInit(): void {}
}
