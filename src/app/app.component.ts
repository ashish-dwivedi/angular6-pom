import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Post Office: Munich';

	public static API_ENDPOINT = 'http://localhost:3000/';

	public static TYPES = [
		{id: 0, name: 'letter'},
		{id: 1, name: 'package'}
	];

	public static WEIGHTS = [
		{id: 0, desc: 'Less than 1kg'},
		{id: 1, desc: 'Between 1kg and 5kg'},
		{id: 2, desc: 'More than 5kg'}
	];

	public static OFFICES = [
		{
				id: 123,
				PLZ: 80686,
				name: 'Laim',
		},
		{
				id: 234,
				PLZ: 80335,
				name: 'Schwanthalerhöhe',
		},
	];
}
