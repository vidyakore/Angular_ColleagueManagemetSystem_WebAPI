import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ColleagueDetailComponent } from './Colleague/colleague-detail/colleague-detail.component'
import { DatePipe } from '@angular/common';
import { ColleagueService } from './shared/colleague.service';
import { AddColleagueComponent } from './Colleague/add-colleague/add-colleague.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from './Department/department-details/department-details.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { EditColleagueComponent } from './Colleague/edit-colleague/edit-colleague.component';
import { EditDepartmentComponent } from './Department/edit-department/edit-department.component';
import { AddAddressComponent } from './Address/add-address/add-address.component';
import { EditAddressComponent } from './Address/edit-address/edit-address.component';
import { AddressDetailComponent } from './Address/address-detail/address-detail.component';
import { AddDeptColleagueComponent } from './deptColleague/add-dept-colleague/add-dept-colleague.component';
import { DeptColleagueDetailComponent } from './deptColleague/dept-colleague-detail/dept-colleague-detail.component';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddAddressInColleagueComponent } from './Colleague/add-address-in-colleague/add-address-in-colleague.component';
@NgModule({
  declarations: [
    AppComponent,
    AddressDetailComponent,
    AddAddressComponent,
    ColleagueDetailComponent,
    AddColleagueComponent,
    DepartmentDetailsComponent,
    AddDepartmentComponent,
    EditColleagueComponent,
    EditDepartmentComponent,
    AddAddressComponent,
    EditAddressComponent,
    DeptColleagueDetailComponent,
    AddDeptColleagueComponent,
    AddAddressInColleagueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,ColleagueService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
