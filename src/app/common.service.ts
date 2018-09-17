import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor(
		private _Http: HttpClient,
		private _MatSnackBar: MatSnackBar
	) { }

	getShipments = () => {
		const apiUrl = AppComponent.API_ENDPOINT + 'shipment/list';
		return this._Http.get(apiUrl);
	};

	getOffice = () => {
		const apiUrl = AppComponent.API_ENDPOINT + 'office/list';
		return this._Http.get(apiUrl);
	};

	addShipment = (params) => {
		const apiUrl = AppComponent.API_ENDPOINT + 'shipment/add';
		return this._Http.post(apiUrl, params);
	}

	addOffice = (params) => {
		const apiUrl = AppComponent.API_ENDPOINT + 'office/add';
		return this._Http.post(apiUrl, params);
	}

	removeShipment= (params) => {
		const apiUrl = AppComponent.API_ENDPOINT + 'shipment/delete';
		return this._Http.post(apiUrl, params);
	}

	removeOffice = (params) => {
		const apiUrl = AppComponent.API_ENDPOINT + 'office/delete';
		return this._Http.post(apiUrl, params);
	}

	updateShipment = (params) => {
		const apiUrl = AppComponent.API_ENDPOINT + 'shipment/update';
		return this._Http.post(apiUrl, params);
	}

	updateOffice = (params) => {
		const apiUrl = AppComponent.API_ENDPOINT + 'office/update';
		return this._Http.post(apiUrl, params);
	}

	openSnackBar(message: string, action: string) {
		this._MatSnackBar.open(message, action, {
			duration: 2000,
		});
	}
}
