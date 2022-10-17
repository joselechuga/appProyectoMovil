import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosSqlPage } from './datos-sql.page';

const routes: Routes = [
  {
    path: '',
    component: DatosSqlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosSqlPageRoutingModule {}
