import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundDetailComponent } from './Components/compound-detail/compound-detail.component';
import { CompoundListComponent } from './Components/compound-list/compound-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CompoundListComponent,
  },
  {
    path: 'compound/:compoundId',
    pathMatch: 'full',
    component: CompoundDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
