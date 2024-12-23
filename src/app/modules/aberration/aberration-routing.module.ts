import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AberrationListComponent } from './pages/aberration-list/aberration-list.component';

const routes: Routes = [
  { path: '', component: AberrationListComponent },
  //   { path: 'aberrationDetails/:id', component: FishDetailComponent },
  //   { path: 'aberrationSearch/:name', component: FishDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AberrationRoutingModule {}
