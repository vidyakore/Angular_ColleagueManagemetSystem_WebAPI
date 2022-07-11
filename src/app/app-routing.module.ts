import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailComponent } from './Address/address-detail/address-detail.component';
import {EditAddressComponent} from './Address/edit-address/edit-address.component'
import { AddAddressComponent } from './Address/add-address/add-address.component';
import { AddColleagueComponent } from './Colleague/add-colleague/add-colleague.component';
import { ColleagueDetailComponent } from './Colleague/colleague-detail/colleague-detail.component';
import { EditColleagueComponent } from './Colleague/edit-colleague/edit-colleague.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { DepartmentDetailsComponent } from './Department/department-details/department-details.component';
import { EditDepartmentComponent } from './Department/edit-department/edit-department.component';
import { DeptColleagueDetailComponent } from './deptColleague/dept-colleague-detail/dept-colleague-detail.component';
import { AddDeptColleagueComponent } from './deptColleague/add-dept-colleague/add-dept-colleague.component';

const routes: Routes = [
  { path: 'Addresses', component: AddressDetailComponent },
  { path: 'Addresses/Add', component: AddAddressComponent },
  { path: 'Addresses/Edit/:id', component: EditAddressComponent },
  { path: 'Colleagues', component: ColleagueDetailComponent },
  { path: 'Colleagues/add', component: AddColleagueComponent },
  { path: 'Colleagues/edit/:id', component: EditColleagueComponent },
  { path: 'Departments', component: DepartmentDetailsComponent },
  { path: 'Departments/add', component: AddDepartmentComponent },
  { path: 'Departments/edit/:id', component: EditDepartmentComponent },
  { path: 'DeptColleagues', component: DeptColleagueDetailComponent },
  { path: 'DeptColleagues/Add', component: AddDeptColleagueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
