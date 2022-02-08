import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	apiUrl = environment.apiUrl;
	private loginDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
		null
	);
	public loginData$ = this.loginDataSubject.asObservable();
	nextLoginData(data) {
		this.loginDataSubject.next(data);
	}

	constructor(private http: HttpClient) {
		if (sessionStorage.getItem('accessToken')) {
			this.nextLoginData({
				accessToken: sessionStorage.getItem('accessToken'),
				userName: sessionStorage.getItem('userName'),
				phoneNo: sessionStorage.getItem('phoneNo')
			});
		}
	}

	resetPassword(email: string, oldPassword: string, newPassword: string) {
		return this.http.post(
			this.apiUrl +
				`authentication/mail/forget/password/${email}/${oldPassword}`,
			{ password: newPassword }
		);
	}

	login(data) {
		return this.http.post(this.apiUrl + 'authentication/login', data).pipe(
			map((res: any) => {
				console.log('res.data.accessToken', res.data.accessToken);
				if (res.data.accessToken) {
					this.nextLoginData(res.data);
					sessionStorage.setItem('accessToken', res.data.accessToken);
					sessionStorage.setItem('role', res.data.designation);
					sessionStorage.setItem(
						'userData',
						JSON.stringify(res.data)
					);
				}
				return res;
			})
		);
	}
	logout() {
		this.pergeData();
	}
	pergeData() {
		sessionStorage.clear();
		return true;
	}
}
