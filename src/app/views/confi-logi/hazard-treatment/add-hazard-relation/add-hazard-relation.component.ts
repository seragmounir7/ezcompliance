import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-hazard-relation',
	templateUrl: './add-hazard-relation.component.html',
	styleUrls: ['./add-hazard-relation.component.scss']
})
export class AddHazardRelationComponent implements OnInit {
	setHazard!: FormGroup;
	hazard = null;
	hazardId = null;
	JurisdictionData: [];
	safety: [];
	codeData: [];
	regulatorData: [];
	isLinear = false;
	constructor(
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public router: Router
	) {}

	ngOnInit(): void {
		this.setHazard = this.fb.group({
			riskRating: ['', Validators.required],
			actionRequired: ['', Validators.required]
		});
		this.route.queryParams.subscribe((id) => {
			this.hazardId = id.id;
			this.logicalFormInfo
				.getHazardTreatmentById(this.hazardId)
				.subscribe((res: any) => {
					this.hazard = res.data;

					if (this.hazard.set == true) {
						this.setHazard.patchValue({
							riskRating: this.hazard.riskRating,
							actionRequired: this.hazard.actionRequired
						});
					}
				});
		});
	}
	Consequences: Array<any> = [
		{ name: '1-Insignificant', value: 1 },
		{ name: '2-Moderate', value: 2 },
		{ name: '4-Minor', value: 4 },
		{ name: '3-Major', value: 3 },
		{ name: '5-Catastrophic', value: 5 }
	];

	Likelihood: Array<any> = [
		{ name: '1-Insignificant', value: 1 },
		{ name: '3-Moderate', value: 3 },
		{ name: '2-Minor', value: 2 },
		{ name: '4-Major', value: 4 },
		{ name: '5-Catastrophic', value: 5 }
	];
	RiskRating: Array<any> = [
		{ name: 'Low', value: 'low' },
		{ name: 'Medium', value: 'medium' },
		{ name: 'High', value: 'high' }
	];
	ActionRequired: Array<any> = [
		{ name: 'Immediately', value: 'immediately' },
		{ name: 'Today', value: 'today' },
		{ name: 'This week', value: 'thisWeek' },
		{ name: 'This Month', value: 'thisMonth' }
	];

	setRelation() {
		const data = {
			set: true,
			title: this.hazard.title,
			riskRating: this.setHazard.get('riskRating').value,
			actionRequired: this.setHazard.get('actionRequired').value
		};

		this.logicalFormInfo
			.updateHazardTreatmentRelation(this.hazardId, data)
			.subscribe((res: any) => {
				Swal.fire({
					title: 'Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/confiLogi/setHazard']);
			});
	}
}
