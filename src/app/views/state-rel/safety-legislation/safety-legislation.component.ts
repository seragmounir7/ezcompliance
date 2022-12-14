import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
import { AddAndEditSafetyComponent } from './add-and-edit-safety/add-and-edit-safety.component';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-safety-legislation',
	templateUrl: './safety-legislation.component.html',
	styleUrls: ['./safety-legislation.component.scss']
})
export class SafetyLegislationComponent implements OnInit {
	mode: any;
	regData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'act', 'regulation', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	/////////////mat table end////////////////

	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		private setTitle: SetTitleService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.getAllSafetyReg();
		this.setTitle.setTitle('WHS-Safety Legislation List');
	}

	getAllSafetyReg(field = '', value = '') {
		this.logicalFormInfo.getAllSafety(field, value).subscribe((res) => {
			// this.jobTaskData = res.data[0].subComponents;
			const data = res.data;
			data.forEach((element, index) => {
				element.index = index + 1; //adding index
			});

			this.ELEMENT_DATA = data;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
		});
	}

	edit(element) {
		const dialogRef = this.dialog.open(AddAndEditSafetyComponent, {
			width: '550px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllSafetyReg();
			}
		});
	}

	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.act}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfo.deleteSafety(item._id).subscribe((res) => {
					Swal.fire({
						title: 'Safety Legislation Deleted successfully',
						showConfirmButton: false,
						timer: 1200
					});

					this.getAllSafetyReg();
				});
			}
		});
	}
	sortData(sort: Sort) {
		this.getAllSafetyReg(sort.active, sort.direction);
	}
}
