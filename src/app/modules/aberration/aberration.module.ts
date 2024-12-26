import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AberrationListComponent } from './pages/aberration-list/aberration-list.component';
import { AberrationRoutingModule } from './aberration-routing.module';
import { FormsModule } from '@angular/forms';
import { AberrationCardComponent } from './components/aberration-card/aberration-card.component';
import { AberrationCardButtonComponent } from './components/aberration-card-button/aberration-card-button.component';
import { AberrationDetailComponent } from './pages/aberration-detail/aberration-detail.component';

@NgModule({
  declarations: [AberrationListComponent, AberrationCardComponent, AberrationCardButtonComponent, AberrationDetailComponent],
  imports: [CommonModule, AberrationRoutingModule, FormsModule],
})
export class AberrationModule {}
