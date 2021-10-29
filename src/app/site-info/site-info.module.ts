import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteInfoRoutingModule } from './site-info-routing.module';
import { SiteInfoComponent } from './site-info.component';
import { AddSiteInfoComponent } from './add-site-info/add-site-info.component';
import { JobTaskComponent } from './job-task/job-task.component';
import { HighRiskConComponent } from './high-risk-con/high-risk-con.component';
import { PpeSelectComponent } from './ppe-select/ppe-select.component';
import { LicenceAndQualComponent } from './licence-and-qual/licence-and-qual.component';
import { SharedModule } from './../shared/shared.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddHighRiskConstructionComponent } from './high-risk-con/add-high-risk-construction/add-high-risk-construction.component';
import { EditHighRiskConstructionComponent } from './high-risk-con/edit-high-risk-construction/edit-high-risk-construction.component';
import { AddJobTaskComponent } from './job-task/add-job-task/add-job-task.component';
import { AddPPEComponent } from './ppe-select/add-ppe/add-ppe.component';
import { EditTaskComponent } from './job-task/edit-task/edit-task.component';

@NgModule({
  declarations: [
    SiteInfoComponent,
    AddSiteInfoComponent,
    JobTaskComponent,
    HighRiskConComponent,
    PpeSelectComponent,
    LicenceAndQualComponent,
    AddCustomerComponent,
    AddHighRiskConstructionComponent,
    EditHighRiskConstructionComponent,AddJobTaskComponent, AddPPEComponent, EditTaskComponent
  ],
  imports: [
    CommonModule,
    SiteInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SiteInfoModule {}
