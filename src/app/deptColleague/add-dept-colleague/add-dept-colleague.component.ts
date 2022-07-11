import { Component, OnInit } from '@angular/core';
import { Colleague } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';
import { DatePipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-dept-colleague',
  templateUrl: './add-dept-colleague.component.html',
  styleUrls: ['./add-dept-colleague.component.css']
})
export class AddDeptColleagueComponent implements OnInit {

  constructor(public colService : ColleagueService,public datepipe:DatePipe) { }

  DeptColleagueForm = new FormGroup({
    // colleagueId: new FormControl(''),
    departmentId: new FormControl(''),
    colleagueId: new FormControl(),
    
  });

  ngOnInit(): void {
    this.colService.getDeptColleague().subscribe(data=>{
      this.colService.listDeptColleague=data;
      console.log(data);
  });
  this.colService.getDepartments().subscribe(data=>{
    this.colService.listDepartment=data;
    console.log(data);
  });

  this.colService.getColleague().subscribe(data=>{
    this.colService.listColleague=data;
    console.log(data);
  });
}

saveDeptColleague()
  {
    console.log(this.DeptColleagueForm);
    this.colService.saveDeptColleague(this.DeptColleagueForm.value).subscribe(result=>{
      console.log(result);
    });
  }

}

