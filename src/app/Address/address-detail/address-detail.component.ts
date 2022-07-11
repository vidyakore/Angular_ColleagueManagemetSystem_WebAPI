import { Component, OnInit } from '@angular/core';
import { Colleague } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';
@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  constructor(public colService : ColleagueService) { }

  ngOnInit(): void {
    this.colService.getAddress().subscribe(data=>{
      this.colService.listAddress=data;
      console.log(data);
    });
  }

  deleteAddress(id:number)
  {
    if(confirm('Do really want to Delete this record?'))
    {
      this.colService.deleteAdress(id).subscribe(
        data => {console.log('Record deleted...');
      }
      );
    }
  }

}
