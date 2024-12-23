import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishModule } from './modules/fish/fish.module';
import { ContactModule } from './modules/contact/contact.module';
import { AberrationModule } from './modules/aberration/aberration.module';

const routes: Routes = [
  { path: '', redirectTo: 'fishList', pathMatch: 'full' },
  {
    path: 'fishList',
    loadChildren: () =>
      import('./modules/fish/fish.module').then((m) => m.FishModule),
  },
  {
    path: 'aberrationList',
    loadChildren: () =>
      import('./modules/aberration/aberration.module').then(
        (m) => m.AberrationModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', redirectTo: 'fishList' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FishModule,
    ContactModule,
    AberrationModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
