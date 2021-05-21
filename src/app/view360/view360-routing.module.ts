import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View360Page } from './view360.page';

const routes: Routes = [
  {
    path: '',
    component: View360Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class View360PageRoutingModule {}
