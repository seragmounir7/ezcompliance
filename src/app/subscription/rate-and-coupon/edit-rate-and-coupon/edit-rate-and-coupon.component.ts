import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import Swal from 'sweetalert2';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-rate-and-coupon',
	templateUrl: './edit-rate-and-coupon.component.html',
	styleUrls: ['./edit-rate-and-coupon.component.scss']
})
export class EditRateAndCouponComponent implements OnInit {
	editSubcriptionForm: FormGroup;
	couponData: any;
	couponsId: any = [];
	dataRec: any;
	coupon: any;

	constructor(
		private dialogRef: MatDialogRef<EditRateAndCouponComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private Subscription: SubscriptionService
	) {
		this.dataRec = data;
	}

	ngOnInit(): void {
		this.getAllCoupon();
		this.dataRec.coupons.forEach((element) => {
			this.couponsId.push(element._id);
		});

		this.editSubcriptionForm = this.fb.group({
			monthly: [this.dataRec.monthly, Validators.required],
			defaultMonthly: [this.dataRec.defaultMonthly, Validators.required],
			defaultEmp: [this.dataRec.defaultEmp, Validators.required],
			yearlyDiscount: [this.dataRec.yearlyDiscount, Validators.required],
			coupons: [this.couponsId, Validators.required]
		});
	}

	onSubmit() {
		const data = {
			monthly: this.editSubcriptionForm.get('monthly').value,
			defaultMonthly: this.editSubcriptionForm.get('defaultMonthly')
				.value,
			defaultEmp: this.editSubcriptionForm.get('defaultEmp').value,
			yearlyDiscount: this.editSubcriptionForm.get('yearlyDiscount')
				.value,
			coupons: this.editSubcriptionForm.get('coupons').value
		};
		this.Subscription.editPlan(this.dataRec._id, data).subscribe((res) => {
			this.dialogRef.close('true');
			Swal.fire({
				title: ' Updated successfully',
				showConfirmButton: false,
				timer: 1200
			});

			this.ngOnInit();
		});
	}
	addForm() {
		this.Subscription.addPlan(this.editSubcriptionForm.value).subscribe(
			(resData) => {
				this.dialogRef.close('true');

				Swal.fire({
					title: ' Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
			}
		);
	}
	close() {
		this.dialogRef.close();
	}
	getAllCoupon() {
		this.Subscription.getAllCoupon().subscribe((res) => {
			this.couponData = res.data;
		});
	}
}
