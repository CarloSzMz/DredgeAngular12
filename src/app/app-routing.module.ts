import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishModule } from './modules/fish/fish.module';

const routes: Routes = [
  { path: '', redirectTo: 'fishList', pathMatch: 'full' },
  {
    path: 'fishList',
    loadChildren: () =>
      import('./modules/fish/fish.module').then((m) => m.FishModule),
  },
  { path: '**', redirectTo: 'fishList' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FishModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
