import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { Router } from '@angular/router';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-question',
	templateUrl: './add-question.component.html',
	styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
	portalData: any = [];
	faqDetails!: FormGroup;
	formData: any;
	hide = false;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private landingPageInfoService: LandingPageInfoServiceService,
		private setTitle: SetTitleService
	) {
		this.faqDetails = this.fb.group({
			question: ['', Validators.required],
			answer: ['', Validators.required],
			portalId: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		this.getAllPortal();
		this.setTitle.setTitle('WHS-Add Question');
	}

	onFormSubmit() {
		this.landingPageInfoService.addFAQ(this.faqDetails.value).subscribe(
			(data) => {
				this.router.navigate(['/admin/landingPageInfo/QA']);
			},
			(err) => {
				console.error(err);
			}
		);
	}
	getAllPortal() {
		this.landingPageInfoService.getAllPortal().subscribe((res) => {
			this.portalData = res.data;
		});
	}
}
