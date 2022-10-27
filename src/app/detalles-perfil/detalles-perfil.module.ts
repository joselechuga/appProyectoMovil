import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPerfilPageRoutingModule } from './detalles-perfil-routing.module';

import { DetallesPerfilPage } from './detalles-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPerfilPageRoutingModule
  ],
  declarations: [DetallesPerfilPage]
})
export class DetallesPerfilPageModule {}
