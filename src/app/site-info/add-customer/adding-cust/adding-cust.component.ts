import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-adding-cust',
	templateUrl: './adding-cust.component.html',
	styleUrls: ['./adding-cust.component.scss']
})
export class AddingCustComponent implements OnInit {
	StatesData: any = [''];
	addCustomerForm: FormGroup;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfoService: LogicalFormInfoService,
		private router: Router,
		public dialogRef: MatDialogRef<AddingCustComponent>
	) {}

	ngOnInit(): void {
		this.addCustomerForm = this.fb.group({
			customerName: ['', Validators.required],
			customerContact: ['', Validators.required],
			streetAddress: ['', Validators.required],
			stateId: ['', Validators.required],
			subUrb: ['', Validators.required],
			postCode: ['', Validators.required],
			ABN: ['', Validators.required],
			contacts: this.fb.array([])
			// customerContactPhone:[''],
			// customerEmail:[''],
		});
		this.addCustomerDetails();
		this.getAllStates();
	}
	addCustomerDetails() {
		this.customerArr().push(this.customerForm());
	}
	customerArr(): FormArray {
		return this.addCustomerForm.get('contacts') as FormArray;
	}
	customerForm(): FormGroup {
		return this.fb.group({
			email: ['', Validators.required],
			phone: ['', Validators.required],
			position: ['', Validators.required]
		});
	}
	removeCustomerDetails(i) {
		const item = <FormArray>this.addCustomerForm.controls.contacts;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onSubmit() {
		this.logicalFormInfoService
			.addCustomer(this.addCustomerForm.value)
			.subscribe(
				(res) => {
					if (this.dialogRef) {
						this.dialogRef.close('ok');
						return;
					}
					//this.dialogRef.close('ok')
					this.router.navigate(['/admin/setting/addCustomer']);
				},
				(err) => {
					console.error(err);
				}
			);
	}

	getAllStates() {
		this.logicalFormInfoService.getAllStates().subscribe((res: any) => {
			this.StatesData = res.data;
		});
	}
	calcHeight(target) {
		let value = target.value;
		this.numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
	}
}
