import { Component, OnInit } from '@angular/core';
import { SetTitleService } from '../utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-subscription',
	templateUrl: './subscription.component.html',
	styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
	constructor(private setTitle: SetTitleService) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Subscription');
	}
}
