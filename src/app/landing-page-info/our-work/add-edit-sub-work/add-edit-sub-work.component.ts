import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-edit-sub-work',
	templateUrl: './add-edit-sub-work.component.html',
	styleUrls: ['./add-edit-sub-work.component.scss']
})
export class AddEditSubWorkComponent implements OnInit {
	SubWorkDetail!: FormGroup;
	selectedImage: any = [];
	myId: boolean;
	Is_subMod: boolean;
	isEdit = false;
	enum: any;
	subId: any;
	testimonailData: any;
	Is_Mod: any;
	Edit = false;
	Add = false;
	module = false;
	subModule = false;
	moduleName: boolean;
	type: string = '';
	Update = false;
	hide = false;
	constructor(
		private fb: FormBuilder,
		private upload: UploadFileServiceService,
		private url: LandingPageInfoServiceService,
		public dialogRef: MatDialogRef<AddEditSubWorkComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.Is_Mod = data.moduleName;
		this.Is_subMod = data.modulename;

		this.SubWorkDetail = this.fb.group({
			title: ['', Validators.required],
			mode: 'System',
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addAction();
		this.Eddit();
		this.Added();

		if (this.Is_Mod == true) {
			this.subModule = true;
			this.module = false;
		}
		if (this.Is_Mod == false) {
			this.module = true;
			this.subModule = false;
		}

		if (this.data.action == 'edit') {
			this.Update = true;

			this.SubWorkDetail.patchValue({
				mode: 'System',
				title: this.data.EditData.title
			});

			this.add().at(0).patchValue({
				title: this.data.EditData.subModules[this.data.index].title,

				description: this.data.EditData.subModules[this.data.index]
					.description
			});

			this.selectedImage = this.data.EditData.subModules[
				this.data.index
			].fileUrl;
		}

		const index = this.data.index;

		this.subId = this.data.EditData.subModules[index]._id;
	}
	Added() {
		if (this.Edit == true) {
			this.Edit = false;
			this.Add = true;
		} else {
			this.Add = true;
		}
	}

	Eddit() {
		if (this.Add == true) {
			this.Add = false;
			this.Edit = true;
		} else {
			this.Edit = true;
		}
	}
	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.SubWorkDetail.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			fileUrl: ['', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
	}
	removeSafetyModule(i) {
		const item = <FormArray>this.SubWorkDetail.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
			this.selectedImage.splice(i, 1);
		}
	}

	browser(event, i) {
		const files = event.target.files[0];
		const formData = new FormData();
		formData.append('', files);
		const value = this.selectedImage;

		if (value) {
			this.upload.upload(formData).subscribe((res) => {
				this.selectedImage = res.files[0];
			});
		} else {
			this.upload.upload(formData).subscribe((res) => {
				this.SubWorkDetail.patchValue({
					filePath: res.filePath
				});
				this.selectedImage.push(res.files[0]);
			});
		}
	}
	onFormSubmit() {
		const value = this.selectedImage;

		const arrlength = this.add().length;
		for (let i = 0; i < arrlength; i++) {
			this.add()
				.at(i)
				.get('fileUrl')
				?.setValue(this.selectedImage[i].toString());
		}
	}
	editModule() {
		if (this.data.action == 'edit') {
			const ServiceData = {
				title: this.SubWorkDetail.controls.title.value,
				mode: 'System'
			};

			this.url
				.editModule(ServiceData, this.data.EditData._id)
				.subscribe((resData) => {
					Swal.fire('Edited Successfully');

					this.dialogRef.close('true');
					this.SubWorkDetail.reset();
				});
		}
	}
	editSubModule() {
		if (this.data.action == 'edit') {
			const submodulesData = {
				moduleId: this.data.EditData._id,
				title: this.add().at(0).get('title')?.value,
				fileUrl: this.selectedImage,
				description: this.add().at(0).get('description')?.value
			};

			this.url
				.editsubModule(submodulesData, this.subId)
				.subscribe((resData) => {
					Swal.fire('Edited Successfully');

					this.dialogRef.close('true');
					this.SubWorkDetail.reset();
				});
		}
	}
	close() {
		this.dialogRef.close();
	}
}
