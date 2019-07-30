import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFrCa from '@angular/common/locales/fr-CA';

// the second parameter 'fr' is optional
registerLocaleData(localeFrCa, 'fr-CA');

import {
  MatButtonModule,
  MatPaginatorIntl,
  MatTableModule,
  MatSortModule,
  MatTabsModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatGridListModule,
  MatChipsModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatAutocompleteModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DdiService } from './ddi.service';
import { InterfaceComponent } from './interface/interface.component';
import { HttpClientModule } from '@angular/common/http';
import { VarGroupComponent } from './var-group/var-group.component';
import { VarComponent } from './var/var.component';
import { VarDialogComponent } from './var-dialog/var-dialog.component';
import { VarStatDialogComponent } from './var-stat-dialog/var-stat-dialog.component';
import { ChartComponent } from './chart/chart.component';
import { CustomPaginator } from './CustomPaginator';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    VarGroupComponent,
    VarComponent,
    VarDialogComponent,
    VarStatDialogComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatAutocompleteModule,
  ],
  exports: [
  ],
  entryComponents: [VarDialogComponent, VarStatDialogComponent],
  providers: [
    DdiService,
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
