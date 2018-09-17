import { AppComponent } from '../app.component';
import { CommonService } from 'src/app/common.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
import { UpdateOfficeModalComponent } from 'src/app/update-office-modal/update-office-modal.component';


@Component({
	selector: 'app-remove-office',
	templateUrl: './remove-office.component.html',
	styleUrls: ['./remove-office.component.css']
})
export class RemoveOfficeComponent implements OnInit {
	offices: any = [];
	displayedColumns: string[] = ['no', 'plz', 'name', 'action'];
	dataSource: any[] = [];

	constructor(private _CommonService: CommonService,
		private _MatDialog: MatDialog
	) {}

	removeOffice = (office) => {
		const dialogRef = this._MatDialog.open(DeleteOfficeConfirmation, {
			width: '300px',
			data: {
				name: 'office',
				id: office.name
			}
		});
		dialogRef.afterClosed().subscribe(
			response => {
				if (response) {
					const params = {
						id: office.id
					};
					this._CommonService.removeOffice(params).subscribe(
						(response) => {
							this.ngOnInit();
							const message = 'Office removed from database!';
							this._CommonService.openSnackBar(message, 'Ok!');
						},
						(error) => {
							this.ngOnInit();
							const message = 'Office removed from database!';
							this._CommonService.openSnackBar(message, 'Ok!');
						}
					);
				}
			},
			error => {}
		)
	}

	updateOffice = (office) => {
		const dialogRef = this._MatDialog.open(UpdateOfficeModalComponent, {
			width: '600px',
			data: office
		})
		dialogRef.afterClosed().subscribe(
			response => {this.ngOnInit()},
			error => {}
		)
	}

	ngOnInit() {
		this._CommonService.getOffice().subscribe(
			response => {this.offices = response
		},
			error => {console.log(error)}
		);
	}
}

@Component({
	selector: 'app-delete-office-confirmation',
	templateUrl: '../remove-shipment/delete-confirmation-dialog.html'
})
export class DeleteOfficeConfirmation {
	constructor(
		public dialogRef: MatDialogRef<DeleteOfficeConfirmation>,
		@Inject(MAT_DIALOG_DATA) public data
	) {}

	onConfirmClick(): void{
		this.dialogRef.close(true);
	}

	onNoClick(): void {
		this.dialogRef.close(false);
	}
}
