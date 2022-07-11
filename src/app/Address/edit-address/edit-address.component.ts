import { Component, OnInit } from '@angular/core';
import { Address, Colleague } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';
import { DatePipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  constructor(public colService : ColleagueService,public datepipe:DatePipe, private router: ActivatedRoute ) { }

  selectedAddress: Address = new Address();

  editAddressForm = new FormGroup({
    // colleagueId: new FormControl(''),
    addLine1: new FormControl(''),
    addLine2: new FormControl(),
    city: new FormControl(''),
    zipcode: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    created: new FormControl( '' )
  });
  ngOnInit(): void {
    this.colService.getAddress().subscribe(data=>{
      this.colService.listAddress=data;
      console.log(data);
    });

    console.log(this.router.snapshot.params['id']);
    this.colService.getAddressById(this.router.snapshot.params['id']).subscribe(
      (result)=>{
        // console.log(result);
        this.editAddressForm = new FormGroup( {
          addLine1: new FormControl( result['addLine1']),
          addLine2 : new FormControl(result['addLine2']),
          city : new FormControl(result['city']),
          zipcode : new FormControl(result['zipcode']),
          state : new FormControl(result['state']),
          country : new FormControl(result['country']),
          created: new FormControl(result['created'])
        })
      }
    );
  }

  editAddress()
  {
    console.log(this.editAddressForm.value);
    this.colService.updateAddressData(this.router.snapshot.params['id'],this.editAddressForm.value).subscribe(
      (result) => {console.log( result );}
    )
  }

}
