import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { EditRateAndCouponComponent } from './edit-rate-and-coupon/edit-rate-and-coupon.component';
import { MatSort } from '@angular/material/sort';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-rate-and-coupon',
	templateUrl: './rate-and-coupon.component.html',
	styleUrls: ['./rate-and-coupon.component.scss']
})
export class RateAndCouponComponent implements OnInit {
	rateAndCoupon!: FormGroup;
	dataPlan: any = [''];
	myId: string;
	data: any;
	isValid: boolean = false;
	ELEMENT_DATA = [];
	displayedColumns: string[] = [
		'index',
		'monthly',
		'defaultMonthly',
		'defaultEmp',
		'yearlyDiscount',
		'coupon',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatSort) sort: MatSort;
	addPlan = false;
	coupon: any;
	constructor(
		private subscript: SubscriptionService,
		private fb: FormBuilder,
		private setTitle: SetTitleService,
		private dialog: MatDialog
	) {
		this.rateAndCoupon = this.fb.group({
			monthly: ['', Validators.required],
			yearly: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		this.getPlan();
		this.getPlanById();
		this.setTitle.setTitle('WHS-Subscription Details');
	}
	monthly: number;
	yearly: number;
	getPlan() {
		this.myId = '6177e0b96d0cc515a04870a2';
		this.subscript.getAllPlan().subscribe((data) => {
			const dataPlan = data.data;
			if (dataPlan.length == 0) {
				this.addPlan = true;
			} else {
				this.addPlan = false;
				this.ELEMENT_DATA = dataPlan;
				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			}
		});
	}

	editPlan() {
		this.isValid = true;
	}
	edit(element) {
		const dialogRef = this.dialog.open(EditRateAndCouponComponent, {
			width: '550px',
			height: '440px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getPlan();
			}
		});
	}

	getPlanById() {
		const id = '61b739367f7aba4a9f8684e1';
		this.subscript.getPlan(id).subscribe((res) => {
			this.coupon = res.data;
		});
	}
}
