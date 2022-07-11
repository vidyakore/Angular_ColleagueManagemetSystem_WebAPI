import { Component, OnInit } from '@angular/core';
import { Colleague } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(public colService : ColleagueService) { }

  ngOnInit(): void {
      this.colService.getDepartments().subscribe(data=>{
      this.colService.listDepartment=data;
      console.log(data);
    });
  }

  deleteDepartment(id:number)
  {
    if(confirm('Do really want to Delete this record?'))
    {
      this.colService.deleteDepartment(id).subscribe(
        data => {console.log('Record deleted...');
      }
      );
    }
  }
}
