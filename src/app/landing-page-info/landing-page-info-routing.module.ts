import { NgModule } from '@angular/core';
import { ApplicationServiceInfoComponent } from './application-service-info/application-service-info.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderInfoComponent } from './header-info/header-info.component';

import { CustomertestimonialsComponent } from './customertestimonials/customertestimonials.component';
import { FlexibleComponent } from './flexible/flexible.component';
import { HappyClientComponent } from './happy-client/happy-client.component';
import { SafetyModulesComponent } from './safety-modules/safety-modules.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HeaderInfoComponent },
  // { path: 'applicationSerInfo', component: ApplicationServiceInfoComponent },
  { path: 'applicationSerInfo', component: ApplicationServiceInfoComponent },
  { path: 'safetyModule', component: SafetyModulesComponent },
  { path: 'happyClient', component: HappyClientComponent },
  { path: 'customer', component: CustomertestimonialsComponent },
  { path: 'flexible', component: FlexibleComponent },
  { path: 'header', component: HeaderInfoComponent },
  { path: 'aboutUs', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageInfoRoutingModule {}
