import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AberrationListComponent } from './pages/aberration-list/aberration-list.component';
import { AberrationDetailComponent } from './pages/aberration-detail/aberration-detail.component';

const routes: Routes = [
  { path: '', component: AberrationListComponent },
  { path: 'aberrationDetails/:id', component: AberrationDetailComponent },
  { path: 'aberrationSearch/:name', component: AberrationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AberrationRoutingModule {}
