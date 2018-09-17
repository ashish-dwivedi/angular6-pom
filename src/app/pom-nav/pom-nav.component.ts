import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Router } from  '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
	selector: 'pom-nav',
	templateUrl: './pom-nav.component.html',
	styleUrls: ['./pom-nav.component.css']
})
export class PomNavComponent {

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);
		
	constructor(private breakpointObserver: BreakpointObserver,
		private _Router: Router
	) {}
	
	}
