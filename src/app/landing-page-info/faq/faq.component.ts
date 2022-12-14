import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { EditFaqComponent } from './edit-faq/edit-faq.component';
import { MatSort } from '@angular/material/sort';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-faq',
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
	FAQData: any = [];
	FaqId: any = [];
	mode: any;
	jobTaskData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	data: any = [];
	myId: any;
	Id: any;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	constructor(
		private dialog: MatDialog,
		private setTitle: SetTitleService,
		private landingPageInfo: LandingPageInfoServiceService
	) {}

	ngOnInit(): void {
		this.getAllPortal();
		this.setTitle.setTitle('WHS-Portal List');
	}
	getAllPortal() {
		this.landingPageInfo.getAllPortal().subscribe((res: any) => {
			const faqData = res.data;
			faqData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});

			this.ELEMENT_DATA = faqData;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	edit(element) {
		const dialogRef = this.dialog.open(EditFaqComponent, {
			width: '550px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllPortal();
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
				this.landingPageInfo.deletePortal(item._id).subscribe((res) => {
					Swal.fire({
						title: 'Deleted successfully',
						showConfirmButton: false,
						timer: 1000
					});

					this.getAllPortal();
				});
			}
		});
	}
}
