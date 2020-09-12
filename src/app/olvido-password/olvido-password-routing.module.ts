import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidoPasswordPage } from './olvido-password.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidoPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidoPasswordPageRoutingModule {}
