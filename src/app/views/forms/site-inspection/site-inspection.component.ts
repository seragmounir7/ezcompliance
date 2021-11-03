import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

@Component({
  selector: 'app-site-inspection',
  templateUrl: './site-inspection.component.html',
  styleUrls: ['./site-inspection.component.scss'],
})
export class SiteInspectionComponent implements OnInit {
  sidePreview!: FormGroup;
  SiteControl!: FormArray;
  siteshow = true;
  siteAction = false;
  itemvalue: any;
  item_values: any = ['In Progress', 'Completed', 'Closed'];

  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private setTitle:SetTitleService
  ) {
    this.sidePreview = this.fb.group({
      Hazard: ['', Validators.required],
      documentation: ['', Validators.required],
      workeronsite: ['', Validators.required],
      SWMS: ['', Validators.required],
      tooboxtalk: ['', Validators.required],
      WHSManual: ['', Validators.required],
      IncidentReport: ['', Validators.required],
      HazardReport: ['', Validators.required],
      EmergrncyEvacuation: ['', Validators.required],
      TrainingRecords: ['', Validators.required],
      WHSPolicy: ['', Validators.required],
      ReturnToWork: ['', Validators.required],
      DisplayHazardReport: ['', Validators.required],
      DisplayEmergrncyEvacuation: ['', Validators.required],
      NoSmoking: ['', Validators.required],
      PPESignage: ['', Validators.required],
      ReportHazardsigns: ['', Validators.required],
      ManualHandlingSigns: ['', Validators.required],
      NoticeBoard: ['', Validators.required],
      AccessEgrassHazards: ['', Validators.required],
      Walkways: ['', Validators.required],
      Walkwaysfree: ['', Validators.required],
      StairsConditionGood: ['', Validators.required],
      HoardingsFenceGates: ['', Validators.required],
      LosseMatrialSecure: ['', Validators.required],
      BinsSkipsLocated: ['', Validators.required],
      BinsSkipsOverflowing: ['', Validators.required],
      ElectricalMainboardLock: ['', Validators.required],
      PowerleadsTested: ['', Validators.required],
      EquipmentGiards: ['', Validators.required],
      EquipmentCondition: ['', Validators.required],
      LeadsSafety: ['', Validators.required],
      SDSavailable: ['', Validators.required],
      ChemicalsStoredSDS: ['', Validators.required],
      SDSRegisterAvailables: ['', Validators.required],
      CorrectPPHand: ['', Validators.required],
      FirstAidavailable: ['', Validators.required],
      FirstKitContentsList: ['', Validators.required],
      KitAccessableWorkers: ['', Validators.required],
      AwarefirstKitLocation: ['', Validators.required],
      Extinguishers: ['', Validators.required],
      ExtinguishersClearlyMaked: ['', Validators.required],
      ExtinguishersSevicedUpdate: ['', Validators.required],
      ExitSingsCondition: ['', Validators.required],
      ExitDoorsBlocked: ['', Validators.required],
      ExitDoorsOpened: ['', Validators.required],
      FireAlarmTested: ['', Validators.required],
      EvacuationPlans: ['', Validators.required],
      EmergencyDrillConduct: ['', Validators.required],
      RiskAssessmentSWMS: ['', Validators.required],
      PlantValidService: ['', Validators.required],
      OpertionProceduresSOPs: ['', Validators.required],
      PPEAvailable: ['', Validators.required],
      EmergencyPlan: ['', Validators.required],
      PlantGoodCondition: ['', Validators.required],
      AppropriateGuards: ['', Validators.required],
      siteAction: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.dynamicFormsService.homebarTitle.next('Site Inspection Form');
    this.setTitle.setTitle('WHS-Site Inspection Form');
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.sidePreview.get('siteAction') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      item: ['', Validators.required],
      action: ['', Validators.required],
      PersonResponsible: ['', Validators.required],
      complete: ['', Validators.required],
    });
  }
  showsite() {
    this.siteshow = true;
    this.siteAction = false;
    console.log(this.sidePreview);
  }
  showAction() {
    this.siteAction = true;
    this.siteshow = false;
    this.add().clear();
    let key = Object.keys(this.sidePreview.value);
    for (let i = 0; i < key.length - 2; i++) {
      let tempValue = this.sidePreview.controls[key[i]].value;
      if (tempValue != '') {
        if (tempValue != 'yes') {
          let index = this.add().length;
          this.addAction();
          this.add().controls[index].get('item').setValue(tempValue);
        }
      }
    }
  }
  removeAction() {
    let index = this.add().length;
    this.add().removeAt(index - 1);
  }
  addAcionTab(event) {
    let b = Object.keys(this.sidePreview.value);
    //   let index =this.add().length
    //   this.addAction()
    // this.add().controls[index].get("item").setValue(event.target.value)

    //  console.log(this.sidePreview.controls[b[0]].value);
  }
}
