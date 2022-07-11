import { Component, OnInit } from '@angular/core';
import { ColleagueService } from '../../shared/colleague.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Department } from 'src/app/shared/colleague.model';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  constructor(public colService : ColleagueService,public datepipe:DatePipe, private router: ActivatedRoute) { }

  selectedColleague: Department = new Department();

  editDepartmentForm = new FormGroup({
    // colleagueId: new FormControl(),
    departmentName: new FormControl(''),
    created: new FormControl( '' )
  });
  ngOnInit(): void {

    this.colService.getAddress().subscribe(data=>{
      this.colService.listAddress=data;
      console.log(data);
    });

    console.log(this.router.snapshot.params['id']);
    this.colService.getDepartmentById(this.router.snapshot.params['id']).subscribe(
      (result)=>{
        // console.log(result);
        this.editDepartmentForm = new FormGroup( {
          departmentName: new FormControl( result['departmentName']),
          created: new FormControl(result['created'])
        })
      }
    );
  }

  updateDepartment()
  {
    console.log(this.editDepartmentForm.value);
    this.colService.UpdateDepartmentData(this.router.snapshot.params['id'],this.editDepartmentForm.value).subscribe(
      (result) => {console.log( result );}
    )
  }

}
