import { AuthService } from './../../../../utils/services/auth.service';
import { Router } from '@angular/router';
import {
	Component,
	OnInit,
	ViewChild,
	HostListener,
	ElementRef,
	Renderer2
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-user-dropdown-menu',
	templateUrl: './user-dropdown-menu.component.html',
	styleUrls: ['./user-dropdown-menu.component.scss']
})
export class UserDropdownMenuComponent implements OnInit {
	public user;

	@ViewChild('dropdownMenu', { static: false }) dropdownMenu;
	@HostListener('document:click', ['$event'])
	clickout(event) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.hideDropdownMenu();
		}
	}

	constructor(
		private elementRef: ElementRef,
		private renderer: Renderer2,
		private appService: AppService,
		private router: Router,
		private authService: AuthService
	) {}
	userName = '';
	phoneNo = '';
	ngOnInit(): void {
		this.user = this.appService.user;
		this.userName = sessionStorage.getItem('userName');
		this.phoneNo = sessionStorage.getItem('phoneNo');
	}

	toggleDropdownMenu() {
		if (this.dropdownMenu.nativeElement.classList.contains('show')) {
			this.hideDropdownMenu();
		} else {
			this.showDropdownMenu();
		}
	}

	showDropdownMenu() {
		this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
	}

	hideDropdownMenu() {
		this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['/']);
	}
}
