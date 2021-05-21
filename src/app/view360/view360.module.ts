import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { View360PageRoutingModule } from './view360-routing.module';

import { View360Page } from './view360.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    View360PageRoutingModule
  ],
  declarations: [View360Page]
})
export class View360PageModule {}
