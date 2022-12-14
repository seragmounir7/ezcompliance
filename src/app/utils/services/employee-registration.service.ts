import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, startWith, tap } from 'rxjs/operators';
import { UserValue, UserResponce } from '../types/UserResponceTypes';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
	providedIn: 'root'
})
export class EmployeeRegistrationService {
	apiUrl = environment.apiUrl;
	constructor(private https: HttpClient) {}

	addEmployeeInfo(data) {
		return this.https
			.post(this.apiUrl + 'authentication/register', data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	getAllEmployeeInfo(): Observable<UserValue[]> {
		return this.https
			.get<UserResponce>(
				this.apiUrl + 'authentication/get/all/created/employees'
			)
			.pipe(
				map((res) => {
					return res.data.map((item) => {
						item.fullName = `${item.firstName} ${item.lastName}`;
						return item;
					});
				})
			);
	}

	getEmpAutoComplete(
		formGroupName: FormGroup,
		controlName: string,
		empArray: UserValue[]
	) {
		return formGroupName.controls[controlName].valueChanges.pipe(
			startWith(''),
			map((value) =>
				typeof value === 'string' ? value : value?.fullName
			),
			map((fullName) =>
				fullName ? this._filter(fullName, empArray) : empArray.slice()
			)
		);
	}

	private _filter(name: string, empArray: UserValue[]): any[] {
		const filterValue = name.toLowerCase();
		return empArray.filter((option) =>
			option.fullName.toLowerCase().includes(filterValue)
		);
	}
	displayFn(user: any): string {
		return user && user.fullName ? user.fullName : '';
	}

	getEmployeeInfoById(id) {
		return this.https
			.get(
				this.apiUrl + 'authentication/clientAdmin/getUserProfile/' + id
			)
			.pipe(
				map((res: any) => {
					res.data = res.data[0];
					return res;
				})
			);
	}

	updateEmployeeInfo(id, data) {
		return this.https
			.put(this.apiUrl + 'authentication/update/user/by/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	deleteEmployeeInfo(id) {
		return this.https.delete(this.apiUrl + 'employee/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
}
