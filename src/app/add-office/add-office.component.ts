import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
	selector: 'app-add-office',
	templateUrl: './add-office.component.html',
	styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {
	officeParams: any = {};

	constructor(private _CommonService: CommonService) { }
	
	addOffice = () => {
		this._CommonService.addOffice(this.officeParams).subscribe(
			response => {
				const message = 'Office added to database';
				this.officeParams = {};
				this._CommonService.openSnackBar(message, 'Ok!');
			},
			error => {}
		)
	}

	ngOnInit() {
	}

}
