import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-add-shipment',
	templateUrl: './add-shipment.component.html',
	styleUrls: ['./add-shipment.component.css']
})
export class AddShipmentComponent implements OnInit {
	types = [];
	weights = [];
	offices: any = [];
	shipmentParams: any = {};

	constructor(private _CommonService: CommonService) {
		this.types = AppComponent.TYPES;
		this.weights = AppComponent.WEIGHTS;
	}

	addShipment = () => {
		const params = {
			type: this.shipmentParams.type.id,
			weight: this.shipmentParams.weight.id,
			office: this.shipmentParams.office.id
		};
		this._CommonService.addShipment(params).subscribe(
			(response) => {
				this.shipmentParams = {};
				const message = 'Shipment added to database';
				this._CommonService.openSnackBar(message, 'Ok!');
			},
			(error) => {
				this.shipmentParams = {};
				const message = 'Shipment added to database';
				this._CommonService.openSnackBar(message, 'Ok!');
			}
		);
	}

	ngOnInit() {
		this._CommonService.getOffice().subscribe(
			response => {this.offices = response}
		)
	}

}
