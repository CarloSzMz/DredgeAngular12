import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFish } from 'src/app/core/models/IFish.model';

@Injectable({
  providedIn: 'root',
})
export class FishServiceService {
  constructor(private httpClient: HttpClient) {}

  getAllFish(): Observable<IFish> {
    return this.httpClient.get<IFish>('assets/data/fishData.json');
  }
}
