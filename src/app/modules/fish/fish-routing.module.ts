import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishListComponent } from './pages/fish-list/fish-list.component';
import { FishDetailComponent } from './pages/fish-detail/fish-detail.component';

const routes: Routes = [
    { path: '', component: FishListComponent },
    { path:'fishDetails/:id',component:FishDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FishRoutingModule {}
