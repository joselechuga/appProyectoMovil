import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosSqlPageRoutingModule } from './datos-sql-routing.module';

import { DatosSqlPage } from './datos-sql.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosSqlPageRoutingModule
  ],
  declarations: [DatosSqlPage]
})
export class DatosSqlPageModule {}
