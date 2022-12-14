import { Component, OnInit } from '@angular/core';
import { version } from './../../../../../package.json';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	public appVersion = version;
	constructor() {}

	ngOnInit() {}
}
