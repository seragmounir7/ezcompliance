import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-and-edit-juri',
	templateUrl: './add-and-edit-juri.component.html',
	styleUrls: ['./add-and-edit-juri.component.scss']
})
export class AddAndEditJuriComponent implements OnInit {
	editTitle: FormGroup;
	dataRec: any;

	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<AddAndEditJuriComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;
	}
	ngOnInit(): void {
		this.editTitle = this.fb.group({
			title: [this.dataRec.title, Validators.required]
		});
	}

	onFormSubmit() {
		const data = {
			title: this.editTitle.get('title').value,
			componentId: this.dataRec.componentId
		};
		this.logicalFormInfo
			.updateJurisdiction(data, this.dataRec._id)
			.subscribe((resData) => {
				this.dialogRef.close('true');
				Swal.fire({
					title: 'Jurisdiction Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	addForm() {
		const data = {
			title: this.editTitle.get('title').value
		};
		this.logicalFormInfo.addJurisdiction(data).subscribe((resData) => {
			this.dialogRef.close('true');
			if (this.dataRec) {
				Swal.fire({
					title: 'Jurisdiction Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			} else {
				Swal.fire({
					title: 'Jurisdiction Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
			}
		});
	}
	closeDialog() {
		this.dialogRef.close('false');
	}
}
