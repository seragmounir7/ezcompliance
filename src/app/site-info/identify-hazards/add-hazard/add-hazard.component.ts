import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-hazard',
	templateUrl: './add-hazard.component.html',
	styleUrls: ['./add-hazard.component.scss']
})
export class AddHazardComponent implements OnInit {
	hazardFG!: FormGroup;
	formData: any;
	public Editor = ClassicEditor;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService
	) {
		this.hazardFG = this.fb.group({
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addAction();
	}
	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.hazardFG.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.hazardFG.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		const data = {
			arrObj: this.hazardFG.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleHazards(data).subscribe(
			(data) => {
				Swal.fire({
					title: 'Parameter Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/setting/hazards']);
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
