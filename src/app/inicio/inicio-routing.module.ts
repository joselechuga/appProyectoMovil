import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { RegistrarPage } from '../registrar/registrar.page';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children:[
      {
        path:'login',
        component:LoginPage
      },
      {
        path:'registrar',
        component:RegistrarPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
