import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-licence',
	templateUrl: './add-licence.component.html',
	styleUrls: ['./add-licence.component.scss']
})
export class AddLicenceComponent implements OnInit {
	addLicenceFG!: FormGroup;
	formData: any;
	categories = [];
	allCategories = [];
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService
	) {
		this.addLicenceFG = this.fb.group({
			// mode:"JobTask",
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addAction();
		this.getAllLicenceCat();
	}
	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.addLicenceFG.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required],
			tradeCategoryId: []
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.addLicenceFG.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	getAllLicenceCat() {
		this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
			this.categories = res.data;
			this.allCategories = (res.data as any[]).map(
				(category) => category._id
			);

			for (let index = 0; index < this.add().length; index++) {
				const element = this.add().at(index) as FormGroup;
				element.controls.tradeCategoryId.patchValue(this.allCategories);
			}
		});
	}
	onFormSubmit() {
		const data = {
			arrObj: this.addLicenceFG.get('arrObj').value
		};

		this.logicalFormInfo.addMultipleLicence(data).subscribe(
			(res) => {
				Swal.fire({
					title: 'Parameter added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/setting/licenceAndQual']);
			},
			(err) => {
				console.error(err);
			}
		);
	}
	calcHeight(target) {
		let value = target.value;
		this.numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
	}
}
