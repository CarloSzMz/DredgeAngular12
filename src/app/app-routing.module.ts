import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
