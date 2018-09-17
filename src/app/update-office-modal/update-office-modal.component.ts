import { AppComponent } from '../app.component';
import { CommonService } from '../common.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-office-modal',
  templateUrl: './update-office-modal.component.html',
  styleUrls: ['./update-office-modal.component.css']
})
export class UpdateOfficeModalComponent implements OnInit {
  officeParams: any = {};

  constructor(
		public dialogRef: MatDialogRef<UpdateOfficeModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		private _CommonService: CommonService
	) {}
	

	updateOffice() {
		this._CommonService.updateOffice(this.officeParams).subscribe(
			response => {this.dialogRef.close()},
			error => {console.log(error);this.dialogRef.close()}
		);
	}

	ngOnInit() {
		this.officeParams = this.data;
	}
}
