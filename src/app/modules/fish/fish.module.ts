import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FishRoutingModule } from './fish-routing.module';
import { FishListComponent } from './pages/fish-list/fish-list.component';
import { FishDetailComponent } from './pages/fish-detail/fish-detail.component';
import { FishCardComponent } from './components/fish-card/fish-card.component';
import { FishCardButtonComponent } from './components/fish-card-button/fish-card-button.component';


@NgModule({
  declarations: [
FishListComponent,
FishDetailComponent,
FishCardComponent,
FishCardButtonComponent
  ],
  imports: [
    CommonModule,
    FishRoutingModule
  ],

})
export class FishModule { }
