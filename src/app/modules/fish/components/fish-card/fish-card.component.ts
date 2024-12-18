import { Component, Input, OnInit } from '@angular/core';
import { FishDatum } from 'src/app/core/models/IFish.model';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.css']
})
export class FishCardComponent implements OnInit {
  @Input() pescado!: FishDatum;

  constructor() { }

  ngOnInit(): void {
  }

}
