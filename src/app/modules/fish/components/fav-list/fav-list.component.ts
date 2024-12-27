import { Component, Input, OnInit } from '@angular/core';
import { FishDatum } from 'src/app/core/models/IFish.model';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {
  @Input() favouriteFish!: FishDatum[];

  constructor() { }

  ngOnInit(): void {
  }

}
