import { Component, OnInit } from '@angular/core';
import { Colleague } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';
import { DatePipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor(public colService : ColleagueService,public datepipe:DatePipe) { }

  addressForm = new FormGroup({
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
  }

  saveAddress()
  {
    console.log(this.addressForm);
    this.colService.saveAddress(this.addressForm.value).subscribe(result=>{
      console.log(result);
    });
  }

}

