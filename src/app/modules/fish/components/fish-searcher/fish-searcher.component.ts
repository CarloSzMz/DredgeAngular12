import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fish-searcher',
  templateUrl: './fish-searcher.component.html',
  styleUrls: ['./fish-searcher.component.css'],
})
export class FishSearcherComponent implements OnInit {
  public fishName: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public searchFish() {
    if (this.fishName.trim()) {
      console.log(this.fishName.toLowerCase());
      this.router.navigate([`fishSearch/${this.fishName.toLowerCase()}`]);
      this.fishName = '';
    }
  }
}
