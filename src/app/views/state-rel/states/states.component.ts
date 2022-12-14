import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
import { AddAndEditStatesComponent } from './add-and-edit-states/add-and-edit-states.component';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-states',
	templateUrl: './states.component.html',
	styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
	mode: any;
	regData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'action'];
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
		this.getAllStates();
		this.setTitle.setTitle('WHS-States List');
	}

	getAllStates() {
		this.logicalFormInfo.getAllStates().subscribe((res) => {
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
		const dialogRef = this.dialog.open(AddAndEditStatesComponent, {
			width: '550px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllStates();
			}
		});
	}

	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.title}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfo.deleteStates(item._id).subscribe((res) => {
					Swal.fire({
						title: 'States Deleted successfully',
						showConfirmButton: false,
						timer: 1200
					});

					this.getAllStates();
				});
			}
		});
	}
}
