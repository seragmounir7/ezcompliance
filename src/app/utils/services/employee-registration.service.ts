import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
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
					console.log('res.data=>', res.data);
					return res;
				})
			);
	}
	getAllEmployeeInfo() {
		return this.https
			.get(this.apiUrl + 'authentication/get/all/created/employees')
			.pipe(
				map((res: any) => {
					return res.data.map((item) => {
						item.fullName = `${item.firstName} ${item.lastName}`;
						return item;
					});
				}),
				tap((res) => console.log('employee/getAll', res))
			);
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
