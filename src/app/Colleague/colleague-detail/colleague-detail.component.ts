import { Component, OnInit } from '@angular/core';
import { Colleague } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';

@Component({
  selector: 'app-colleague-detail',
  templateUrl: './colleague-detail.component.html',
  styleUrls: ['./colleague-detail.component.css']
})
export class ColleagueDetailComponent implements OnInit {

  constructor(public colService : ColleagueService) { }

  ngOnInit(){

    this.colService.getColleague().subscribe(data=>{
      this.colService.listColleague=data;
      console.log(data);
    });
  }

  populateColleague(selectedColleague : Colleague)
  {
    // let df = this.datepipe.transform(selectedAddress.created,'yyyy-MM-dd ');
    // selectedAddress.created = df;
    console.log("In function populate");
    console.log(selectedColleague);
    this.colService.colleagueData = selectedColleague;
  }

  deleteColleague(id:number) 
  {
    if(confirm('Do really want to Delete this record?'))
    {
      this.colService.deleteColleague(id).subscribe(
        data => {console.log('Record deleted...');
      }
      );
    }
  }

}
