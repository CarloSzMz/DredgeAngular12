import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FishListComponent } from './modules/fish/pages/fish-list/fish-list.component';
import { FishCardComponent } from './modules/fish/components/fish-card/fish-card.component';
import { FishCardButtonComponent } from './modules/fish/components/fish-card-button/fish-card-button.component';
import { FishDetailComponent } from './modules/fish/pages/fish-detail/fish-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FishListComponent,
    FishCardComponent,
    FishCardButtonComponent,
    FishDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
