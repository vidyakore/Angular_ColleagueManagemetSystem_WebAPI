import { Component, OnInit } from '@angular/core';
import { Colleague } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';
import { DatePipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit-colleague',
  templateUrl: './edit-colleague.component.html',
  styleUrls: ['./edit-colleague.component.css']
})
export class EditColleagueComponent implements OnInit {

  constructor(public colService : ColleagueService,public datepipe:DatePipe, private router: ActivatedRoute ) { }


  selectedColleague: Colleague = new Colleague();

  // addColleague = new FormGroup(
  //   this.colService.colleagueData.colleagueName = FormControl( '' ),

  //   );
  editColleagueForm = new FormGroup({
    // colleagueId: new FormControl(),
    colleagueName: new FormControl(''),
    addressId: new FormControl(0),
    created: new FormControl( '' )
  });
  // colleagueName = new FormControl('');
  // addressId = new FormControl('');

  ngOnInit(): void {
    this.colService.getAddress().subscribe(data=>{
      this.colService.listAddress=data;
      console.log(data);
    });

    this.colService.getColleague().subscribe(data=>{
      this.colService.listColleague=data;
      console.log(data);
    });

    console.log(this.router.snapshot.params['id']);
    this.colService.getColleagueById(this.router.snapshot.params['id']).subscribe(
      (result)=>{
        // console.log(result);
        this.editColleagueForm = new FormGroup( {
          colleagueName: new FormControl( result['colleagueName']),
          addressId : new FormControl(result['addressId']),
          created: new FormControl(result['created'])
        })
      }
    );
  }

  updateColleague()
  {
    console.log(this.editColleagueForm.value);
    this.colService.UpdateColleagueData(this.router.snapshot.params['id'],this.editColleagueForm.value).subscribe(
      (result) => {console.log( result );}
    )
  }
 
}
