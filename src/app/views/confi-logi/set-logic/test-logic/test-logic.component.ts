import { AddItemComponent } from './../set-relation/add-item/add-item.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-test-logic',
	templateUrl: './test-logic.component.html',
	styleUrls: ['./test-logic.component.scss']
})
export class TestLogicComponent implements OnInit {
	JobTaskDetail!: FormGroup;
	jobTask = null;
	highRiskConstructionData = [];
	PPESelectionData = [];
	licenseAndQual = [];
	allHazards = [];
	allContrlActReq = [];
	licenceByTradecat = [];
	resiRiskLevelData = [];
	riskLevelData = [];
	staff = [];
	allCodeOfPract = [];
	isLinear = false;
	jobTaskId = null;
	stepperList: any[] = [
		{
			name: 'HighRisk Construction',
			i: 1,
			ref: 'test'
		},
		{
			name: 'PPE',
			i: 0,
			ref: 'test2'
		},
		{
			name: 'Licence',
			i: 0
		},
		{
			name: 'Identify Hazards',
			i: 0
		},
		{
			name: 'Risk Level',
			i: 0
		},
		{
			name: 'Control Action Required',
			i: 0
		},
		{
			name: 'Code of Practice',
			i: 0
		},
		{
			name: 'Residule Risk Level',
			i: 0
		},
		{
			name: 'Code of Practice',
			i: 0
		},
		{
			name: 'Chemical related Task',
			i: 0
		},
		{
			name: 'Person Responsible',
			i: 0
		}
	];

	count: number = 0;

	constructor(
		private route: ActivatedRoute,
		private dialog: MatDialog,
		private router: Router,
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService
	) {}

	ngOnInit(): void {
		this.JobTaskDetail = this.fb.group({
			highRiskConstr: [''],
			PPE: [''],
			codeOfPract: [''],
			LicenceCat: [''],
			identifyHazrds: [''],
			contrActReq: [''],
			riskLevel: [''],
			residualRiskL: [''],
			personResp: [''],
			chemical: []
		});

		this.route.queryParams.subscribe((id) => {
			this.jobTaskId = id.id;
			this.logicalFormInfo.getJobtaskById(id.id).subscribe((res: any) => {
				this.jobTask = res.data;

				this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);

				if (this.jobTask.set == true) {
					this.JobTaskDetail.patchValue({
						highRiskConstr: this.jobTask.risk,
						PPE: this.jobTask.PPE,
						codeOfPract: this.jobTask.PPE,
						LicenceCat: this.jobTask.licence,
						identifyHazrds: this.jobTask.identifyHazard,
						contrActReq: this.jobTask.controlActionRequired,
						riskLevel: this.jobTask.riskLevel,
						residualRiskL: this.jobTask.residualRisk,
						personResp: this.jobTask.staffId,
						chemical: this.jobTask.chemical
					});
				}
				if (this.jobTask?.chemical === 'YES')
					this.JobTaskDetail.get('chemical').setValue('YES');
				else this.JobTaskDetail.get('chemical').setValue('NO');
			});
		});

		this.getAllHighRisk();
		this.getAllPPE();
		this.getAllHazard();
		this.getAllContrActReq();
		this.getAllStaff();
		this.getAllResidualRiskLevel();
		this.getAllRiskLevel();
		this.getAllCodeOfPractice();
	}

	getAllResidualRiskLevel() {
		this.logicalFormInfo.getAllResidual().subscribe((res: any) => {
			this.resiRiskLevelData = res.data;
		});
	}
	getAllRiskLevel() {
		this.logicalFormInfo.getAllRiskLevel().subscribe((res: any) => {
			this.riskLevelData = res.data;
		});
	}
	getAllStaff() {
		this.logicalFormInfo.getAllStaff().subscribe((res: any) => {
			this.staff = res.data;
		});
	}
	getAllHighRisk() {
		this.logicalFormInfo.getAllRisk().subscribe((res: any) => {
			this.highRiskConstructionData = res.data;
		});
	}
	getAllPPE() {
		this.logicalFormInfo.getAllPPE().subscribe((res: any) => {
			this.PPESelectionData = res.data;
		});
	}
	getAllCodeOfPractice() {
		this.logicalFormInfo.getAllCOP().subscribe((res: any) => {
			this.allCodeOfPract = res.data;
		});
	}

	getAllHazard() {
		this.logicalFormInfo.getAllHazards().subscribe((res: any) => {
			this.allHazards = res.data;
		});
	}
	getAllContrActReq() {
		this.logicalFormInfo.getAllContrlActReq().subscribe((res: any) => {
			this.allContrlActReq = res.data;
		});
	}
	getLicenceByTradeCat(id) {
		this.logicalFormInfo.getLicenceByTradeCat(id).subscribe((res) => {
			this.licenceByTradecat = res.data.licenceData;
		});
	}
	setRelation() {
		const allContrlActReqTitle = [];
		const temp1 = this.JobTaskDetail.get('contrActReq').value;
		this.allContrlActReq.forEach((element1) => {
			temp1.forEach((element2) => {
				if (element1._id === element2) {
					allContrlActReqTitle.push(element1.title);
				}
			});
		});
		const allHazardsTitle = [];
		const temp2 = this.JobTaskDetail.get('identifyHazrds').value;
		this.allHazards.forEach((element1) => {
			temp2.forEach((element2) => {
				if (element1._id === element2) {
					allHazardsTitle.push(element1.title);
				}
			});
		});
		const allCOPTitle = [];
		const temp3 = this.JobTaskDetail.get('codeOfPract').value;
		this.allCodeOfPract.forEach((element1) => {
			temp3.forEach((element2) => {
				if (element1._id === element2) {
					allCOPTitle.push(element1.title);
				}
			});
		});
		const data = {
			title: this.jobTask.title,
			risk: this.JobTaskDetail.get('highRiskConstr').value,
			PPE: this.JobTaskDetail.get('PPE').value,
			tradeCategoryId: this.jobTask.tradeCategoryId,
			licence: this.JobTaskDetail.get('LicenceCat').value,
			identifyHazard: this.JobTaskDetail.get('identifyHazrds').value,
			controlActionRequired: this.JobTaskDetail.get('contrActReq').value,
			riskLevel: this.JobTaskDetail.get('riskLevel').value,
			residualRisk: this.JobTaskDetail.get('residualRiskL').value,
			staffId: this.JobTaskDetail.get('personResp').value,
			chemical: this.JobTaskDetail.get('chemical').value,
			set: true
		};

		this.logicalFormInfo
			.updateJobTask(data, this.jobTaskId)
			.subscribe((res) => {
				Swal.fire({
					title: 'Relation set successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/confiLogi/setLogic']);
			});
	}
	addItem(type) {
		let temp = {
			type,
			tradeCategoryId: this.jobTask.tradeCategoryId
		};
		if (type === 'licence') {
			temp = {
				type,
				tradeCategoryId: this.jobTask.tradeCategoryId
			};
		} else {
			temp = {
				type,
				tradeCategoryId: ''
			};
		}

		const dialogRef = this.dialog.open(AddItemComponent, {
			width: '550px',
			// height:'50%',
			data: temp
		});

		dialogRef.afterClosed().subscribe((result) => {
			switch (result) {
				case 'highRisk': {
					const data = this.JobTaskDetail.get('highRiskConstr').value;
					this.getAllHighRisk();
					this.JobTaskDetail.get('highRiskConstr').patchValue(data);
					break;
				}
				case 'ppe': {
					const data = this.JobTaskDetail.get('PPE').value;
					this.getAllPPE();
					this.JobTaskDetail.get('PPE').patchValue(data);
					break;
				}
				case 'codeOfPract': {
					const data = this.JobTaskDetail.get('codeOfPract').value;
					this.getAllCodeOfPractice();
					this.JobTaskDetail.get('codeOfPract').patchValue(data);
					break;
				}
				case 'licence': {
					const data = this.JobTaskDetail.get('LicenceCat').value;
					this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);
					this.JobTaskDetail.get('LicenceCat').patchValue(data);
					break;
				}
				case 'identifyHazards': {
					const data = this.JobTaskDetail.get('identifyHazrds').value;
					this.getAllHazard();
					this.JobTaskDetail.get('identifyHazrds').patchValue(data);
					break;
				}
				case 'riskLevel': {
					const data = this.JobTaskDetail.get('riskLevel').value;
					this.getAllRiskLevel();
					this.JobTaskDetail.get('riskLevel').patchValue(data);
					break;
				}
				case 'ctrlActreq': {
					const data = this.JobTaskDetail.get('contrActReq').value;
					this.getAllContrActReq();
					this.JobTaskDetail.get('contrActReq').patchValue(data);
					break;
				}
				case 'resRiskLevel': {
					const data = this.JobTaskDetail.get('residualRiskL').value;
					this.getAllResidualRiskLevel();
					this.JobTaskDetail.get('residualRiskL').patchValue(data);
					break;
				}
				case 'perResbl': {
					const data = this.JobTaskDetail.get('personResp').value;
					this.getAllStaff();
					this.JobTaskDetail.get('personResp').patchValue(data);
					break;
				}
			}
		});
	}

	prev(item) {
		if (this.count != this.stepperList.length + 1) {
			this.count--;
			this.stepperList.map((x) => {
				x.i = 0;
			});
			this.stepperList[this.count].i = 1;
		}
	}
	next(item) {
		if (this.count != this.stepperList.length - 1) {
			this.count++;
			this.stepperList.map((x) => {
				x.i = 0;
			});
			this.stepperList[this.count].i = 1;
		}
	}
	handleClick(index) {
		this.count = index;
		this.stepperList.map((x) => {
			x.i = 0;
		});
		this.stepperList[this.count].i = 1;
	}

	ctx = { estimate: 'this.totalEstimate' };
}
