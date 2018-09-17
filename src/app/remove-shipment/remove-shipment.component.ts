import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
	selector: 'app-remove-shipment',
	templateUrl: './remove-shipment.component.html',
	styleUrls: ['./remove-shipment.component.css']
})
export class RemoveShipmentComponent implements OnInit {
	displayedColumns: string[] = ['no', 'type', 'weight', 'office', 'action'];
	dataSource: any = [];

	constructor(private _CommonService: CommonService,
		private _MatDialog: MatDialog
	) {}

	removeShipment = (element) => {
		const dialogRef = this._MatDialog.open(DeleteConfirmationDialog, {
			width: '300px',
			data: {
				name: 'shipment',
				id: element.id
			}
		});
		dialogRef.afterClosed().subscribe(
			response => {
				const params = {
					id: element.id
				};
				this._CommonService.removeShipment(params).subscribe(
					(reponse) => {
						this.ngOnInit();
						const message = 'Shipment removed from database!';
						this._CommonService.openSnackBar(message, 'Ok!');
					},
					(error) => {
						this.ngOnInit();
						const message = 'Office removed from database!';
						this._CommonService.openSnackBar(message, 'Ok!');
					}
				);
			},
			error => {}
		)
	}

	updateShipment = (row) => {
		const dialogRef = this._MatDialog.open(UpdateModalComponent, {
			width: '600px',
			data: row
		})
		dialogRef.afterClosed().subscribe(
			response => {this.ngOnInit()},
			error => {}
		)
	}

	ngOnInit() {
		this._CommonService.getShipments().subscribe(
			response => {
				this.dataSource = response;
				this.dataSource = this.dataSource.map(item => {
					if (Array.isArray(item.type)) {
						item.type = item.type[0];
					}
					return item;
				})
			},
			error => {}
		);
	}
}

@Component({
	selector: 'delete-confirmation-dialog',
	templateUrl: 'delete-confirmation-dialog.html',
})
export class DeleteConfirmationDialog {
	constructor(
		public dialogRef: MatDialogRef<DeleteConfirmationDialog>,
		@Inject(MAT_DIALOG_DATA) public data
	) {}

	onConfirmClick() : void {
		this.dialogRef.close(true);
	}

	onNoClick(): void {
		this.dialogRef.close(false);
	}
}
