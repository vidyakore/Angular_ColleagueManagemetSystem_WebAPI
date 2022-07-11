import { Component, OnInit } from '@angular/core';
import { Department } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(public colService : ColleagueService,public datepipe:DatePipe) { }

  DepartmentForm = new FormGroup({
    departmentName: new FormControl(''),
    created: new FormControl( '' )
  })
  ngOnInit(): void {
    this.colService.getDepartments().subscribe(data=>{
      this.colService.listDepartment=data;
      console.log(data);
    });
  }

  saveDepartment()
  {
    console.log(this.DepartmentForm);
    this.colService.saveDepartment(this.DepartmentForm.value).subscribe(result=>{
      console.log(result);
    });
  }

}
