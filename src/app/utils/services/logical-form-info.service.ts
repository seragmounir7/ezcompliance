import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { RegulatorResponce } from '../types/Regulator';
import { Observable, of } from 'rxjs';
import { JurisDictionResponce } from '../types/Jurisdiction';
import { SafetyLeslationResponce } from '../types/SafetyLegislation';
import { SiteResponceTypes } from '../types/SiteResponceTypes';
import { CustomerResponceTypes } from '../types/CustomerResponceTypes';
import {
	JobNumberResponceTypes,
	ModifiedJobNumber,
	OriginalJobNumber
} from '../types/JobNumberResponceTypes';
import { ResponceBody } from '../types/ResponceBody';
import { HazardGetByID } from '../types/HazardTypes';

@Injectable({
	providedIn: 'root'
})
export class LogicalFormInfoService {
	[x: string]: any;
	apiUrl = environment.apiUrl;

	constructor(private https: HttpClient) {}
	getJobTaskListById(id: any) {
		return this.https.get(this.apiUrl + 'component/get/data/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	addFormData(data: any) {
		return this.https.post(this.apiUrl + 'component/multiple', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	getFormDataById(id: any) {
		return this.https.get(this.apiUrl + 'component/get/data/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deleteSubComponent(id: any) {
		return this.https
			.delete(this.apiUrl + 'subComponent/delete/' + id)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	editSubComponent(data, id) {
		return this.https
			.put(this.apiUrl + 'subComponent/update/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	uploadMultiple(data, id) {
		return this.https
			.put(this.apiUrl + 'component/upload/multiple/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	addSubComponent(data: any) {
		return this.https.post(this.apiUrl + 'subComponent/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	//licence api///
	getAllLicence(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https
			.get(this.apiUrl + `licence/getAll?field=${field}&value=${value}`)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	getLicenceById(id) {
		return this.https.get(this.apiUrl + 'licence/get/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	addLicence(data) {
		return this.https.post(this.apiUrl + 'licence/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	addMultipleLicence(data) {
		return this.https.post(this.apiUrl + 'licence/add/multiple', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	updateLicence(id, data) {
		return this.https.put(this.apiUrl + 'licence/update/' + id, data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deleteLicence(id) {
		return this.https.delete(this.apiUrl + 'licence/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	///licence category crud///
	addLicenceCat(data) {
		return this.https.post(this.apiUrl + 'tradeCategory/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllLicenceCat(field = '', value = '') {
		field = 'order';
		value = '1';
		if (value == '') {
			field = '';
		}
		return this.https
			.get(
				this.apiUrl +
					`tradeCategory/getAll?field=${field}&value=${value}`
			)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	reOrderCat(data) {
		return this.https
			.patch(this.apiUrl + `tradeCategory/updateBy/order`, {
				order: data
			})
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	getLicenceByTradeCat(id) {
		return this.https.get(this.apiUrl + 'tradeCategory/getAll/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	updateLicenceCat(data, id) {
		return this.https
			.put(this.apiUrl + 'tradeCategory/update/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	deleteLicenceCat(id) {
		return this.https
			.delete(this.apiUrl + 'tradeCategory/delete/' + id)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	///licence category end crud///

	//risk crud///
	addRisk(data) {
		return this.https.post(this.apiUrl + 'risk/add', data);
	}
	addMultipleRisk(data) {
		return this.https.post(this.apiUrl + 'risk/add/multiple', data);
	}
	updateRisk(data, id) {
		return this.https.put(this.apiUrl + 'risk/update/' + id, data);
	}
	deleteRisk(id) {
		return this.https.delete(this.apiUrl + 'risk/delete/' + id);
	}
	getAllRisk(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `risk/getAll?field=${field}&value=${value}`
		);
	}
	getRiskById(id) {
		return this.https.get(this.apiUrl + 'risk/get/' + id);
	}
	//add risk end

	//add job task
	addJobTask(data) {
		return this.https.post(this.apiUrl + 'jobTask/add', data);
	}
	addMultipleJobTask(data) {
		return this.https.post(this.apiUrl + 'jobTask/add/multiple', data);
	}
	updateJobTask(data, id) {
		return this.https.put(this.apiUrl + 'jobTask/update/' + id, data);
	}
	deleteJobTask(id) {
		return this.https.delete(this.apiUrl + 'jobTask/delete/' + id);
	}
	getAllJobtask(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `jobTask/getAll?field=${field}&value=${value}`
		);
	}
	getJobtaskById(id) {
		return this.https.get(this.apiUrl + 'jobTask/get/' + id);
	}
	//add job task end

	//add ppe
	addPPE(data) {
		return this.https.post(this.apiUrl + 'ppe/add', data);
	}
	addMultiplePPE(data) {
		return this.https.post(this.apiUrl + 'ppe/add/multiple', data);
	}
	updatePPE(data, id) {
		return this.https.put(this.apiUrl + 'ppe/update/' + id, data);
	}
	deletePPE(id) {
		return this.https.delete(this.apiUrl + 'ppe/delete/' + id);
	}
	getAllPPE(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `ppe/getAll?field=${field}&value=${value}`
		);
	}
	getPPEById(id) {
		return this.https.get(this.apiUrl + 'ppe/get/' + id);
	}
	//add ppe end

	//add Identify Hazards
	addHazards(data) {
		return this.https.post(this.apiUrl + 'identifyHazard/add', data);
	}
	addMultipleHazards(data) {
		return this.https.post(
			this.apiUrl + 'identifyHazard/add/multiple',
			data
		);
	}
	updateHazards(data, id) {
		return this.https.put(
			this.apiUrl + 'identifyHazard/update/' + id,
			data
		);
	}
	deleteHazards(id) {
		return this.https.delete(this.apiUrl + 'identifyHazard/delete/' + id);
	}
	getAllHazards(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `identifyHazard/getAll?field=${field}&value=${value}`
		);
	}
	getHazardsById(id) {
		return this.https.get(this.apiUrl + 'identifyHazard/get/' + id);
	}
	updateAllHazards(data, jobTaskId) {
		return this.https.patch(this.apiUrl + `identifyHazard/updateAll`, {
			order: data,
			jobTaskId
		});
	}
	//add Identify Hazards end

	///add control ation required///
	addContrlActReq(data) {
		return this.https.post(this.apiUrl + 'controlActionRequired/add', data);
	}
	addMultipleContrlActReq(data) {
		return this.https.post(
			this.apiUrl + 'controlActionRequired/add/multiple',
			data
		);
	}
	updateContrlActReq(data, id) {
		return this.https.put(
			this.apiUrl + 'controlActionRequired/update/' + id,
			data
		);
	}
	deleteContrlActReq(id) {
		return this.https.delete(
			this.apiUrl + 'controlActionRequired/delete/' + id
		);
	}
	getAllContrlActReq(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`controlActionRequired/getAll?field=${field}&value=${value}`
		);
	}
	updateAllContrlActReq(data, jobTaskId) {
		return this.https.patch(
			this.apiUrl + `controlActionRequired/updateAll`,
			{ order: data, jobTaskId }
		);
	}

	getContrlActReqById(id) {
		return this.https.get(this.apiUrl + 'controlActionRequired/get/' + id);
	}
	///add control ation required end///

	////code of practice///
	addCOP(data) {
		return this.https.post(this.apiUrl + 'cop/add', data);
	}
	addMultipleCOP(data) {
		return this.https.post(this.apiUrl + 'cop/add/multiple', data);
	}
	updateCOP(data, id) {
		return this.https.put(this.apiUrl + 'cop/update/' + id, data);
	}
	deleteCOP(id) {
		return this.https.delete(this.apiUrl + 'cop/delete/' + id);
	}
	getAllCOP(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `cop/getAll?field=${field}&value=${value}`
		);
	}
	getCOPById(id) {
		return this.https.get(this.apiUrl + 'cop/get/' + id);
	}
	////code of practice end///
	///project manager/////
	addProjectMang(data) {
		return this.https.post(this.apiUrl + 'projectManager/add', data);
	}
	addMultipleProjectManager(data) {
		return this.https.post(
			this.apiUrl + 'projectManager/add/multiple',
			data
		);
	}
	updateProjectMang(data, id) {
		return this.https.put(
			this.apiUrl + 'projectManager/update/' + id,
			data
		);
	}
	deleteProjectMang(id) {
		return this.https.delete(this.apiUrl + 'projectManager/delete/' + id);
	}
	getAllProjectMang(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `projectManager/getAll?field=${field}&value=${value}`
		);
	}
	getProjectMangById(id) {
		return this.https.get(this.apiUrl + 'projectManager/get/' + id);
	}
	///project manager end/////
	///job no/////
	getAllSite(field = '', value = ''): Observable<SiteResponceTypes> {
		if (value == '') {
			field = '';
		}
		return this.https.get<SiteResponceTypes>(
			this.apiUrl + `site/getAll?field=${field}&value=${value}`
		);
	}
	///job no end/////

	///site start/////
	//
	addSite(data: Site) {
		return this.https.post(this.apiUrl + 'site/add', data);
	}
	updateSite(id, data: Site) {
		return this.https.put(this.apiUrl + 'site/update/' + id, data);
	}
	deleteSite(id) {
		return this.https.delete(this.apiUrl + 'site/delete/' + id);
	}
	///site end/////

	///customer strat/////
	getAllCustomer(field = '', value = ''): Observable<CustomerResponceTypes> {
		if (value == '') {
			field = '';
		}
		return this.https.get<CustomerResponceTypes>(
			this.apiUrl + `customer/getAll?field=${field}&value=${value}`
		);
	}
	addCustomer(data: Customer) {
		return this.https.post(this.apiUrl + 'customer/add', data);
	}
	updateCustomer(id, data: Customer) {
		return this.https.put(this.apiUrl + 'customer/update/' + id, data);
	}
	deleteCustomer(id) {
		return this.https.delete(this.apiUrl + 'customer/delete/' + id);
	}
	///customer end/////

	///job number start/////
	getAllJobNumber(
		field = '',
		value = ''
	): Observable<JobNumberResponceTypes> {
		if (value == '') {
			field = '';
		}
		return this.https
			.get<JobNumberResponceTypes>(
				this.apiUrl + `jobNumber/getAll?field=${field}&value=${value}`
			)
			.pipe(
				map((res) => {
					res.data = (res.data as OriginalJobNumber[]).map((obj) => {
						const { customerId, siteId, ...rest } = obj;

						const modifiedObj: ModifiedJobNumber = {
							...customerId,
							...siteId,
							...rest
						};

						return modifiedObj;
					});
					return res;
				})
			);
	}
	addJobNumber(data: JobNumber) {
		return this.https.post(this.apiUrl + 'jobNumber/add', data);
	}
	updateJobNumber(id, data: JobNumber) {
		return this.https.put(this.apiUrl + 'jobTask/update/' + id, data);
	}
	deleteJobNumber(id) {
		return this.https.delete(this.apiUrl + 'jobNumber/delete/' + id);
	}
	///job number end/////
	////////////////// Start  Chemical Info///////////
	getAllChemical(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `chemical/getAll?field=${field}&value=${value}`
		);
	}
	addChemical(data) {
		return this.https.post(this.apiUrl + 'chemical/add', data);
	}
	addMultipleChemical(data) {
		return this.https.post(this.apiUrl + 'chemical/add/multiple', data);
	}
	updateChemical(id, data) {
		return this.https.put(this.apiUrl + 'chemical/update/' + id, data);
	}
	deleteChemical(id) {
		return this.https.delete(this.apiUrl + 'chemical/delete/' + id);
	}
	/////////////////// Chemical Info End /////////

	///Jurisdiction start/////
	addJurisdiction(data) {
		return this.https.post(this.apiUrl + 'jurisdiction/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllJurisdiction(
		field = '',
		value = ''
	): Observable<JurisDictionResponce> {
		if (value == '') {
			field = '';
		}
		return this.https
			.get<JurisDictionResponce>(
				this.apiUrl +
					`jurisdiction/getAll?field=${field}&value=${value}`
			)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	updateJurisdiction(data, id) {
		return this.https
			.put(this.apiUrl + 'jurisdiction/update/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	deleteJurisdiction(id) {
		return this.https
			.delete(this.apiUrl + 'jurisdiction/delete/' + id)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	///Jurisdiction end/////

	///Regulator start/////
	addRegulator(data) {
		return this.https.post(this.apiUrl + 'regulator/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllRegulator(field = '', value = ''): Observable<RegulatorResponce> {
		if (value == '') {
			field = '';
		}
		return this.https
			.get<RegulatorResponce>(
				this.apiUrl + `regulator/getAll?field=${field}&value=${value}`
			)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	updateRegulator(data, id) {
		return this.https
			.put(this.apiUrl + 'regulator/update/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	deleteRegulator(id) {
		return this.https.delete(this.apiUrl + 'regulator/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	///Regulator end/////

	///Code Of Practice start/////
	addCode(data) {
		return this.https.post(this.apiUrl + 'cop/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllCode() {
		return this.https.get(this.apiUrl + 'cop/getAll').pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	updateCode(data, id) {
		return this.https.put(this.apiUrl + 'cop/update/' + id, data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deleteCode(id) {
		return this.https.delete(this.apiUrl + 'cop/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	///Code Of Practice end/////

	///Safety Legislation start/////
	addSafety(data) {
		return this.https
			.post(this.apiUrl + 'safetyLegislation/add', data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	getAllSafety(field = '', value = ''): Observable<SafetyLeslationResponce> {
		if (value == '') {
			field = '';
		}
		return this.https
			.get<SafetyLeslationResponce>(
				this.apiUrl +
					`safetyLegislation/getAll?field=${field}&value=${value}`
			)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	updateSafety(data, id) {
		return this.https
			.put(this.apiUrl + 'safetyLegislation/update/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	deleteSafety(id) {
		return this.https
			.delete(this.apiUrl + 'safetyLegislation/delete/' + id)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	getJobs(id): Observable<any> {
		return this.https
			.get<ResponceBody<any>>(
				`${environment.apiUrl}dashboard/get/jobs/list/${id}`
			)
			.pipe(map((res) => res.data));
	}

	///Safety Legislation end/////

	//////////////// States start//////////////////
	addStates(data) {
		return this.https.post(this.apiUrl + 'state/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllStates() {
		return this.https.get(this.apiUrl + 'state/getAll').pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	updateStates(data, id) {
		return this.https.put(this.apiUrl + 'state/update/' + id, data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deleteStates(id) {
		return this.https.delete(this.apiUrl + 'state/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getstatesById(id) {
		return this.https.get(this.apiUrl + 'state/get/' + id);
	}

	///////////////////End States /////////

	//////////////// START RISK LEVEL INFO//////////////////
	getAllRiskLevel(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `riskLevel/getAll?field=${field}&value=${value}`
		);
	}
	addRiskLevel(data) {
		return this.https.post(this.apiUrl + 'riskLevel/add', data);
	}
	addMultipleRiskLevel(data) {
		return this.https.post(this.apiUrl + 'riskLevel/add/multiple', data);
	}
	updateRiskLevel(id, data) {
		return this.https.put(this.apiUrl + 'riskLevel/update/' + id, data);
	}
	deleteRiskLevel(id) {
		return this.https.delete(this.apiUrl + 'riskLevel/delete/' + id);
	}
	///////////////////End RISK LEVEL INFO /////////

	//////////////////STArT RESIDUAL LEVEL INFO/////////////////////
	getAllResidual(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `residualRisk/getAll?field=${field}&value=${value}`
		);
	}
	addResidual(data) {
		return this.https.post(this.apiUrl + 'residualRisk/add', data);
	}
	addMultipleResidual(data) {
		return this.https.post(this.apiUrl + 'residualRisk/add/multiple', data);
	}
	updateResidual(id, data) {
		return this.https.put(this.apiUrl + 'residualRisk/update/' + id, data);
	}
	deleteResidual(id) {
		return this.https.delete(this.apiUrl + 'residualRisk/delete/' + id);
	}
	/////////////////// End RESIDUAL INFO /////////

	///////////////// START STAFF INFO//////////////
	getAllStaff(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `staff/getAll?field=${field}&value=${value}`
		);
	}
	addStaff(data) {
		return this.https.post(this.apiUrl + 'staff/add', data);
	}
	addMultipleStaff(data) {
		return this.https.post(this.apiUrl + 'staff/add/multiple', data);
	}
	updateStaff(id, data) {
		return this.https.put(this.apiUrl + 'staff/update/' + id, data);
	}
	deleteStaff(id) {
		return this.https.delete(this.apiUrl + 'staff/delete/' + id);
	}
	///////////////////  STAFF INFO End /////////

	///////////////// START Nature Of Incident//////////////
	getAllNatOfInc(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`natureOfIncident/getAll?field=${field}&value=${value}`
		);
	}
	addNatOfInc(data) {
		return this.https.post(this.apiUrl + 'natureOfIncident/add', data);
	}
	addMultipleNatOfInc(data) {
		return this.https.post(
			this.apiUrl + 'natureOfIncident/add/multiple',
			data
		);
	}
	updateNatOfInc(data, id) {
		return this.https.put(
			this.apiUrl + 'natureOfIncident/update/' + id,
			data
		);
	}
	deleteNatOfInc(id) {
		return this.https.delete(this.apiUrl + 'natureOfIncident/delete/' + id);
	}
	///////////////////  Nature Of Incident End /////////

	///////////////// START Changes Made//////////////
	getAllChangesMade(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `changesMade/getAll?field=${field}&value=${value}`
		);
	}
	addChangesMade(data) {
		return this.https.post(this.apiUrl + 'changesMade/add', data);
	}
	addMultipleChangesMade(data) {
		return this.https.post(this.apiUrl + 'changesMade/add/multiple', data);
	}
	updateChangesMade(data, id) {
		return this.https.put(this.apiUrl + 'changesMade/update/' + id, data);
	}
	deleteChangesMade(id) {
		return this.https.delete(this.apiUrl + 'changesMade/delete/' + id);
	}
	///////////////////  Changes Made End /////////

	///////////////// Root Cause Of Incident Made//////////////
	getAllRootCause(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`rootcauseOfIncident/getAll?field=${field}&value=${value}`
		);
	}
	addRootCause(data) {
		return this.https.post(this.apiUrl + 'rootcauseOfIncident/add', data);
	}
	addMultipleRootCause(data) {
		return this.https.post(
			this.apiUrl + 'rootcauseOfIncident/add/multiple',
			data
		);
	}
	updateRootCause(data, id) {
		return this.https.put(
			this.apiUrl + 'rootcauseOfIncident/update/' + id,
			data
		);
	}
	deleteRootCause(id) {
		return this.https.delete(
			this.apiUrl + 'rootcauseOfIncident/delete/' + id
		);
	}
	///////////////////  Root Cause Of Incident End /////////

	///////////////// Type Of Incident Made//////////////
	getAllTypeOfIncident(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `typeOfIncident/getAll?field=${field}&value=${value}`
		);
	}
	addTypeOfIncident(data) {
		return this.https.post(this.apiUrl + 'typeOfIncident/add', data);
	}
	addMultipleTypeOfIncident(data) {
		return this.https.post(
			this.apiUrl + 'typeOfIncident/add/multiple',
			data
		);
	}
	updateTypeOfIncident(data, id) {
		return this.https.put(
			this.apiUrl + 'typeOfIncident/update/' + id,
			data
		);
	}
	deleteTypeOfIncident(id) {
		return this.https.delete(this.apiUrl + 'typeOfIncident/delete/' + id);
	}
	///////////////////  Type Of Incident End /////////

	///////////////// Incident Report Form//////////////
	getAllIncidentReport(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`incidentForm/getAllNewRecords?field=${field}&value=${value}`
		);
	}
	getAllIncidentHistory(field = '', value = '', id) {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`incidentForm/getRelatedOldData/${id}?field=${field}&value=${value}`
		);
	}
	addIncidentReport(data) {
		return this.https.post(this.apiUrl + 'incidentForm/add', data);
	}
	addMultipleIncidentReport(data) {
		return this.https.post(this.apiUrl + 'incidentForm/add/multiple', data);
	}
	updateIncidentReport(id, data) {
		return this.https.put(this.apiUrl + 'incidentForm/update/' + id, data);
	}
	getIncidentReportById(id) {
		return this.https.get(this.apiUrl + 'incidentForm/get/' + id);
	}
	deleteIncidentReport(id) {
		return this.https.delete(this.apiUrl + 'incidentForm/delete/' + id);
	}
	///////////////////  Incident Report Form End /////////

	/////////////////// Subscription Start /////////
	// /plan/getAll
	getAllPlan() {
		return this.https.get(this.apiUrl + 'plan/getAll');
	}
	addPlan(data) {
		return this.https.post(this.apiUrl + 'plan/add', data);
	}
	addtoolBox(data) {
		return this.https.post(this.apiUrl + 'toolbox/add', data);
	}
	editToolBox(id, data) {
		return this.https.put(this.apiUrl + 'toolbox/update/' + id, data);
	}
	gettoolBox(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`toolbox/getAllNewRecords?field=${field}&value=${value}`
		);
	}
	gettoolBoxHistory(field = '', value = '', id) {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`toolbox/getRelatedOldData/${id}?field=${field}&value=${value}`
		);
	}
	getToolboxById(id) {
		return this.https.get(this.apiUrl + 'toolbox/get/' + id);
	}
	deleteToolBox(id) {
		return this.https.delete(this.apiUrl + 'toolbox/delete/' + id);
	}

	/////////////////// Subscription End /////////
	///////////////////////// Manager Start /////////
	addManager(data) {
		return this.https.post(this.apiUrl + 'manager/add', data);
	}
	editManager(id, data) {
		return this.https.put(this.apiUrl + 'manager/update/' + id, data);
	}
	getAllManager(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `manager/getAll?field=${field}&value=${value}`
		);
	}
	getManagerById(id) {
		return this.https.get(this.apiUrl + 'manager/get/' + id);
	}
	deleteManager(id) {
		return this.https.delete(this.apiUrl + 'manager/delete/' + id);
	}
	addMultipleManager(data) {
		return this.https.post(this.apiUrl + 'manager/add/multiple', data);
	}
	/////////////////////// ManagerEnd//////////
	//////////////////// WHS Manager///////////
	addWHSManager(data) {
		return this.https.post(this.apiUrl + 'WHSManager/add', data);
	}
	editWHSManager(id, data) {
		return this.https.put(this.apiUrl + 'WHSManager/update/' + id, data);
	}
	getAllWHSManager(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl + `WHSManager/getAll?field=${field}&value=${value}`
		);
	}
	getWHSManagerById(id) {
		return this.https.get(this.apiUrl + 'WHSManager/get/' + id);
	}
	deleteWHSManager(id) {
		return this.https.delete(this.apiUrl + 'WHSManager/delete/' + id);
	}
	addMultipleWHSManager(data) {
		return this.https.post(this.apiUrl + 'WHSManager/add/multiple', data);
	}

	////////////////// Start Site Inspection ///////////

	getAllSiteInspection(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https
			.get(
				this.apiUrl +
					`siteInspection/getAllNewRecords?field=${field}&value=${value}`
			)
			.pipe(
				map((res: any) => {
					(res.data as any[]).map((x) => {
						return {
							...x,
							_id: x._id
						};
					});
					return res;
				})
			);
	}
	getAllSiteInspectionHistory(field = '', value = '', id) {
		if (value == '') {
			field = '';
		}
		return this.https
			.get(
				this.apiUrl +
					`siteInspection/getRelatedOldData/${id}?field=${field}&value=${value}`
			)
			.pipe(map((data: any) => data.data[0]));
	}
	addSiteInspection(data) {
		return this.https.post(this.apiUrl + 'siteInspection/add', data);
	}
	getSiteInspection(id) {
		return this.https.get(this.apiUrl + 'siteInspection/get/' + id);
	}
	updateSiteInspection(id, data) {
		return this.https.put(
			this.apiUrl + 'siteInspection/update/' + id,
			data
		);
	}
	deleteSiteInspection(id) {
		return this.https.delete(this.apiUrl + 'siteInspection/delete/' + id);
	}

	////////////////// End Site Inspection ////////////
	////////////////////// Start Hzaard ///////

	getAllHazardFormData(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		// return this.https.get(this.apiUrl + `site/getAll?field=${field}&value=${value}`)

		return this.https.get(
			this.apiUrl +
				`hazard/getAllNewRecords?field=${field}&value=${value}`
		);
	}
	getAllHazardFormDataHistory(field = '', value = '', id) {
		if (value == '') {
			field = '';
		}
		// return this.https.get(this.apiUrl + `site/getAll?field=${field}&value=${value}`)

		return this.https
			.get(
				this.apiUrl +
					`hazard/getRelatedOldData/${id}?field=${field}&value=${value}`
			)
			.pipe(map((data: any) => data.data[0]));
	}
	addHazardFormData(data) {
		return this.https.post(this.apiUrl + 'hazard/add', data);
	}
	getHazardFormDataById(id) {
		return this.https.get<ResponceBody<HazardGetByID>>(
			this.apiUrl + 'hazard/get/' + id
		);
	}
	updateHazardFormData(id, data) {
		return this.https.put(this.apiUrl + 'hazard/update/' + id, data);
	}
	deleteHazardFormData(id) {
		return this.https.delete(this.apiUrl + 'hazard/delete/' + id);
	}
	//////////////End Hazard///////////
	getAllHazardTreatmentRelation() {
		return this.https.get(this.apiUrl + 'hazardTreatmentRelation/getAll');
	}

	getHazardTreatmentById(id) {
		return this.https.get(
			this.apiUrl + 'hazardTreatmentRelation/get/' + id
		);
	}
	updateHazardTreatmentRelation(id, data) {
		return this.https.put(
			this.apiUrl + 'hazardTreatmentRelation/update/' + id,
			data
		);
	}

	////////////////// Start Site Inspection category ///////////

	getAllSiteInspectionCategory(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`siteInspectionCategory/getAll?field=${field}&value=${value}`
		);
	}
	getSiteInspectionCategory(id) {
		return this.https.get(this.apiUrl + 'siteInspectionCategory/get/' + id);
	}
	getTopicByCategoryID(id, field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`siteInspectionCategory/getAllTopics/${id}?field=${field}&value=${value}`
		);
	}
	addSiteInspectionCategory(data) {
		return this.https.post(
			this.apiUrl + 'siteInspectionCategory/add',
			data
		);
	}
	updateSiteInspectionCategory(id, data) {
		return this.https.put(
			this.apiUrl + 'siteInspectionCategory/update/' + id,
			data
		);
	}
	deleteSiteInspectionCategory(id) {
		return this.https.delete(
			this.apiUrl + 'siteInspectionCategory/delete/' + id
		);
	}

	////////////////// End Site Inspection category ////////////
	////////////////// Start Site Inspection Topic ///////////

	getAllSiteInspectionTopic() {
		return this.https.get(this.apiUrl + 'siteInspectionTopic/getAll');
	}
	getSiteInspectionTopic(id) {
		return this.https.get(this.apiUrl + 'siteInspectionTopic/get/' + id);
	}
	addMultipleSiteInspectionTopic(data) {
		return this.https.post(
			this.apiUrl + 'siteInspectionTopic/add/multiple',
			data
		);
	}
	addSiteInspectionTopic(data) {
		return this.https.post(this.apiUrl + 'siteInspectionTopic/add', data);
	}
	updateSiteInspectionTopic(id, data) {
		return this.https.put(
			this.apiUrl + 'siteInspectionTopic/update/' + id,
			data
		);
	}
	deleteSiteInspectionTopic(id) {
		return this.https.delete(
			this.apiUrl + 'siteInspectionTopic/delete/' + id
		);
	}
	getAllassessmet(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`riskAssessment/getAllNewRecords?field=${field}&value=${value}`
		);
	}
	getAllassessmetHistory(field = '', value = '', id) {
		if (value == '') {
			field = '';
		}
		return this.https
			.get(
				this.apiUrl +
					`riskAssessment/getRelatedOldData/${id}?field=${field}&value=${value}`
			)
			.pipe(map((data: any) => data.data[0]));
	}
	getAssessmentbyId(id) {
		return this.https.get(this.apiUrl + 'riskAssessment/get/' + id);
	}
	addAssessment(data) {
		return this.https.post(this.apiUrl + 'riskAssessment/add', data);
	}
	updateAssessment(id, data) {
		return this.https.put(
			this.apiUrl + 'riskAssessment/update/' + id,
			data
		);
	}
	deleteAssessment(id) {
		return this.https.delete(this.apiUrl + 'riskAssessment/delete/' + id);
	}
	////////////////// End Site Inspection topic ////////////
	////////////////////Start Add Notifiable Accident Instruction ////////////////

	getInstruction() {
		return this.https.get(this.apiUrl + 'accidentReportInstruction/getAll');
	}
	postInstruction(data) {
		return this.https.post(
			this.apiUrl + 'accidentReportInstruction/add',
			data
		);
	}
	deleteInstruction(id) {
		return this.https.delete(
			this.apiUrl + 'accidentReportInstruction/delete/' + id
		);
	}
	////////////////////End Add Notifiable Accident Instruction ////////////////

	////////////////////Start Add Risk Assessment Instruction ////////////////

	getRiskInstruction() {
		return this.https.get(this.apiUrl + 'riskAsstInstruction/getAll');
	}
	postRiskInstruction(data) {
		return this.https.post(this.apiUrl + 'riskAsstInstruction/add', data);
	}
	deleteRiskInstruction(id) {
		return this.https.delete(
			this.apiUrl + 'riskAsstInstruction/delete' + id
		);
	}
	////////////////////End Add Risk Assessment Instruction ////////////////
	////////////////// Start Site Inspection ///////////

	getAllSubcontract() {
		return this.https.get(this.apiUrl + 'subContractor/getAll');
	}

	addSubcontract(data) {
		return this.https.post(this.apiUrl + 'subContractor/add', data);
	}
	getSubcontract(id) {
		return this.https.get(this.apiUrl + 'subContractor/get/' + id);
	}
	updateSubcontract(id, data) {
		return this.https.put(this.apiUrl + 'subContractor/update/' + id, data);
	}
	deleteSubcontract(id) {
		return this.https.delete(this.apiUrl + 'subContractor/delete/' + id);
	}

	////////////////// End Site Inspection ////////////

	////////////////////Start Add client Terms And Conditions ////////////////

	getTermsAndConditions() {
		return this.https
			.get(this.apiUrl + 'termsAndCondition/getAll')
			.pipe(map((res: any) => res.data));
	}
	postTermsAndConditions(data) {
		return this.https.post(this.apiUrl + 'termsAndCondition/add', {
			termsAndCond: data
		});
	}
	deleteTermsAndConditions(id) {
		return this.https.delete(
			this.apiUrl + 'termsAndCondition/delete/' + id
		);
	}
	////////////////////End Add client Terms And Conditions ////////////////

	//////////////////Start Return PPE and plant/Equipment //////////////////
	/////PPE//////
	getSubmitedPPE() {
		return this.https.get(this.apiUrl + 'ppeReturn/getAll');
	}
	getBySubmitedPPE(id) {
		return this.https.get(this.apiUrl + 'ppeReturn/get/' + id);
	}
	postSubmitedPPE(data) {
		return this.https.post(this.apiUrl + 'ppeReturn/add', data);
	}
	deleteSubmitedPPE(id) {
		return this.https.delete(this.apiUrl + 'ppeReturn/delete/' + id);
	}
	updateSubmitedPPE(id, data) {
		return this.https.delete(this.apiUrl + 'ppeReturn/update/' + id, data);
	}
	/////////////plant///////////////
	getSubmitedPlant() {
		return this.https.get(this.apiUrl + 'plantReturn/getAll');
	}
	getBySubmitedPlant(id) {
		return this.https.get(this.apiUrl + 'plantReturn/get/' + id);
	}
	postSubmitedPlant(data) {
		return this.https.post(this.apiUrl + 'plantReturn/add', data);
	}
	deleteSubmitedPlant(id) {
		return this.https.delete(this.apiUrl + 'plantReturn/delete/' + id);
	}
	updateSubmitedPlant(id, data) {
		return this.https.delete(
			this.apiUrl + 'plantReturn/update/' + id,
			data
		);
	}
	//////////////////////////Get PPE/Plant///////////////////////
	getSubmitedPPEPlantById(id) {
		return this.https.get(this.apiUrl + 'plantReturn/getPlantPpe/' + id);
	}
	getSubmitedPPEPlantEmpId(id) {
		return this.https.get(this.apiUrl + 'plantReturn/getBy/' + id);
	}
	getAllSubmitedPPEPlant() {
		return this.https.get(this.apiUrl + 'plantReturn/getPlantAndPPE');
	}

	//////////////////End Return PPE and plant/Equipment //////////////////

	//////////////////Start of Frequency/Enable  //////////////////

	getLogicalFormFrequency() {
		return this.https.get(this.apiUrl + 'logicalFormFrequency/getall');
	}

	updateLogicalFormFrequency(id: string, formFrequency: String) {
		return this.https.put(
			this.apiUrl + 'logicalFormFrequency/update/' + id,
			{ frequency: formFrequency }
		);
	}
	enableDisableLogicalForm(id: string, toggleVlaue: boolean) {
		return this.https.put(
			this.apiUrl + 'logicalFormFrequency/update/' + id,
			{ enable: toggleVlaue }
		);
	}

	//////////////////End of Frequency/Enable //////////////////
}

export interface Site {
	siteName: string;
	streetNumber: string;
	streetAddress: string;
	suburb: string;
	state: string;
}

export interface Customer {
	customerName: string;
	customerContact: string;
	customerContactPhone: string;
	customerEmail: string;
}

// export interface JobNumber {
// 	arrObj: ArrObj[];
// }

export interface JobNumber {
	jobNumber?: string;
	customerId: string;
	siteId: string;
	stateId: string;
	// siteName: string;
	// streetAddress: string;
	// suburb: string;
	// postcode: string;
	// customerName: string;
	// customerContact: string;
	// customerContactPhone: string;
	// customerEmail: string;
}
