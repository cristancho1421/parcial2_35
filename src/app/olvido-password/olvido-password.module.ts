import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoPasswordPageRoutingModule } from './olvido-password-routing.module';

import { OlvidoPasswordPage } from './olvido-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidoPasswordPageRoutingModule
  ],
  declarations: [OlvidoPasswordPage]
})
export class OlvidoPasswordPageModule {}
