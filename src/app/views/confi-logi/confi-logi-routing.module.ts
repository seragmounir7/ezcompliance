import { SetLogicComponent } from './set-logic/set-logic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiLogiComponent } from './confi-logi.component';

const routes: Routes = [
  { path: '', component: ConfiLogiComponent },
  { path: 'setLogic', component: SetLogicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiLogiRoutingModule { }
