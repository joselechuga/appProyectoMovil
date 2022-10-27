import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPerfilComponent } from '../detail-perfil/detail-perfil.component';
import { DetailPerfil2Component } from '../detail-perfil2/detail-perfil2.component';

import { DetallesPerfilPage } from './detalles-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPerfilPage,
    children: [
      {
        path: 'detail-perfil',
        component:DetailPerfilComponent
      },
      {
        path: 'detail-perfil2',
        component:DetailPerfil2Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPerfilPageRoutingModule {}
