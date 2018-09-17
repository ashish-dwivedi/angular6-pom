import { AppComponent } from '../app.component';
import { CommonService } from '../common.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-update-modal',
	templateUrl: './update-modal.component.html',
	styleUrls: ['/update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
	updateParams: any = {};
	weights: any[]= [];
	types: any[] = [];
	offices: any = [];

	constructor(
		public dialogRef: MatDialogRef<UpdateModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		private _CommonService: CommonService
	) {
		this.weights = AppComponent.WEIGHTS;
		this.types = AppComponent.TYPES;
		this.offices = AppComponent.OFFICES;
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	updateShipment() {
		const params = {
			id: this.data.id,
			type: this.types.filter(element => element.id === this.updateParams.type),
			weight: this.weights.filter(element => element.id === this.updateParams.weight),
			office: this.offices.filter(element => element.id === this.updateParams.office)
		}
		this._CommonService.updateShipment(params).subscribe(
			response => {this.onNoClick()},
			error => {this.onNoClick()}
		)
	}

	ngOnInit() {
		this.updateParams = {
			type: this.data.type.id,
			weight: this.data.type.id,
			office: this.data.office.id
		};
		this._CommonService.getOffice().subscribe(
			response => {this.offices = response},
			error => {console.log(error)}
		)
	}
}

