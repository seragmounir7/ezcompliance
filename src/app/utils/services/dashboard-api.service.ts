import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponceBody } from '../types/ResponceBody';
import { UserValue } from '../types/UserResponceTypes';

@Injectable({
	providedIn: 'root'
})
export class DashboardApiService {
	constructor(private http: HttpClient) {}

	getFormCount(): Observable<CountData> {
		return this.http
			.get<ResponceBody<CountData>>(
				`${environment.apiUrl}dashboard/getCount`
			)
			.pipe(map((res) => res.data));
	}

	getCorrectiveAction(): Observable<CorrectiveActionData[]> {
		return this.http
			.get<ResponceBody<CorrectiveActionData[]>>(
				`${environment.apiUrl}dashboard/get/corrective/action`
			)
			.pipe(
				map((res) =>
					res.data.map((item) => {
						console.log();
						item.personRes.fullName = `${item.personRes.firstName} ${item.personRes.lastName}`;
						return item;
					})
				)
			);
	}

	updateCorrectiveAction(data: CorrectiveUpdateData) {
		return this.http.put(
			`${environment.apiUrl}dashboard/update/correctiveAction`,
			data
		);
	}
}

// Generated by https://quicktype.io

export interface CorrectiveActionData {
	completed: boolean;
	formName: string;
	_id?: string;
	action: string;
	personRes: UserValue;
	date: Date;
	complete?: Date;
}

export interface CorrectiveUpdateData {
	_id: string;
	formName: string;
}

export interface CountData {
	cards: Cards;
	barChart: BarChart;
}

export interface BarChart {
	abrasionCount: number;
	bruiseCount: number;
	cutsCount: number;
	illnessCount: number;
	amputationCount: number;
	burnCount: number;
	herniaCount: number;
	brokenBoneCount: number;
	otherCount: number;
	crushingInjuryCount: number;
	headInjuryCount: number;
}

export interface Cards {
	nearMissCount: number;
	firstAidCount: number;
	medicalTreatmentCount: number;
	lostTimeInjuryCount: number;
	deathDataCount: number;
	hazardResult: number;
	incidentFormResult: number;
	riskAssessmentResult: number;
	toolBoxResult: number;
	siteInspectionResult: number;
	savedDynamicFormResult: number;
}
