import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class SubscriptionRatesGuard implements CanActivate {
	constructor(private toastr: ToastrService) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		if (!environment.allRouteTemp) {
			const activeToast = this.toastr.error(
				'You Are Not allowed to access this route.',
				''
			);
		}
		return environment.allRouteTemp;
	}
}
