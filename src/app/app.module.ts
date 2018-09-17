import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PomNavComponent } from './pom-nav/pom-nav.component';
import { AddOfficeComponent } from './add-office/add-office.component';
import { AddShipmentComponent } from './add-shipment/add-shipment.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveOfficeComponent } from './remove-office/remove-office.component';
import { DeleteOfficeConfirmation } from './remove-office/remove-office.component';
import { RemoveShipmentComponent, DeleteConfirmationDialog } from './remove-shipment/remove-shipment.component';

import { MatFormFieldModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule,
	MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
	MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule,
	MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
	MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
	MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
	MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule,
	MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { UpdateOfficeModalComponent } from './update-office-modal/update-office-modal.component';

@NgModule({
	declarations: [
		AppComponent,
		PomNavComponent,
		AddOfficeComponent,
		AddShipmentComponent,
		UpdateModalComponent,
		RemoveOfficeComponent,
		RemoveShipmentComponent,
		DeleteConfirmationDialog,
		DeleteOfficeConfirmation,
		UpdateOfficeModalComponent
	],
	imports: [
		FormsModule,
		LayoutModule,
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,

		MatListModule,
		MatIconModule,
		MatCardModule,
		MatMenuModule,
		MatSortModule,
		MatTabsModule,
		MatTreeModule,
		MatBadgeModule,
		MatChipsModule,
		MatInputModule,
		MatTableModule,
		MatRadioModule,
		MatButtonModule,
		MatDialogModule,
		MatRippleModule,
		MatSelectModule,
		MatSliderModule,
		MatTooltipModule,
		MatStepperModule,
		MatToolbarModule,
		MatSidenavModule,
		MatDividerModule,
		MatGridListModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatFormFieldModule,
		MatExpansionModule,
		MatPaginatorModule,
		MatNativeDateModule,
		MatDatepickerModule,
		ReactiveFormsModule,
		MatBottomSheetModule,
		MatProgressBarModule,
		MatSlideToggleModule,
		MatAutocompleteModule,
		MatButtonToggleModule,
		MatProgressSpinnerModule,

		RouterModule.forRoot([
			{path: 'office/add', component: AddOfficeComponent},
			{path:'', redirectTo: 'office/add', pathMatch: 'full'},
			{path: 'shipment/add', component: AddShipmentComponent},
			{path: 'office/modify', component: RemoveOfficeComponent},
			{path: 'shipment/modify', component: RemoveShipmentComponent}
		])
	],
	providers: [],
	entryComponents: [
		UpdateModalComponent,
		DeleteConfirmationDialog,
		DeleteOfficeConfirmation,
		UpdateOfficeModalComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
