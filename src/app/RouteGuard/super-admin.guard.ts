import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../utils/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class SuperAdminGuard implements CanActivate {
	constructor(private authService: AuthService) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.authService.isAdmin$;
	}
}
