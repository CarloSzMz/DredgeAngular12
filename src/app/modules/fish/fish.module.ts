import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FishRoutingModule } from './fish-routing.module';
import { FishListComponent } from './pages/fish-list/fish-list.component';
import { FishDetailComponent } from './pages/fish-detail/fish-detail.component';
import { FishCardComponent } from './components/fish-card/fish-card.component';
import { FishCardButtonComponent } from './components/fish-card-button/fish-card-button.component';
import { FishSearcherComponent } from './components/fish-searcher/fish-searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FishFiltersComponent } from './components/fish-filters/fish-filters.component';
import { FavButtonComponent } from './components/fav-button/fav-button.component';
import { FavListComponent } from './components/fav-list/fav-list.component';

@NgModule({
  declarations: [
    FishListComponent,
    FishDetailComponent,
    FishCardComponent,
    FishCardButtonComponent,
    FishSearcherComponent,
    FishFiltersComponent,
    FavButtonComponent,
    FavListComponent,
  ],
  imports: [CommonModule, FishRoutingModule, FormsModule, ReactiveFormsModule],
})
export class FishModule {}
