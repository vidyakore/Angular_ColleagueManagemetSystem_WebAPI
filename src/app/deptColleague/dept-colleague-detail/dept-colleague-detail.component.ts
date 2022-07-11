import { Component, OnInit } from '@angular/core';
import { Colleague } from '../../shared/colleague.model';
import { ColleagueService } from 'src/app/shared/colleague.service';

@Component({
  selector: 'app-dept-colleague-detail',
  templateUrl: './dept-colleague-detail.component.html',
  styleUrls: ['./dept-colleague-detail.component.css']
})
export class DeptColleagueDetailComponent implements OnInit {

  constructor(public colService:ColleagueService) { }

  ngOnInit() {

    this.colService.getDeptColleague().subscribe(data=>{
      this.colService.listDeptColleague=data;
      console.log(data);
    });
  }

}
