import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddAddressComponent } from 'src/app/Address/add-address/add-address.component';
import { Address, Colleague } from '../../shared/colleague.model';
import { ColleagueService } from '../../shared/colleague.service';
import { DatePipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-colleague',
  templateUrl: './add-colleague.component.html',
  styleUrls: ['./add-colleague.component.css']
})
export class AddColleagueComponent implements OnInit {
  selectedColleague: Colleague = new Colleague();
  @ViewChild('myDiv') myDiv: ElementRef;
  constructor(public colService : ColleagueService,public datepipe:DatePipe) { }

  // addColleague = new FormGroup(
  //   this.colService.colleagueData.colleagueName = FormControl( '' ),

  //   );
  ColleagueForm = new FormGroup({
    // colleagueId: new FormControl(''),
    colleagueName: new FormControl(''),
    addressId: new FormControl(),
    created: new FormControl(''),
    //changed
    addnew: new FormControl('')
  });
  // colleagueName = new FormControl('');
  // addressId = new FormControl('');

  newAdd:Address = new Address()

  getAddLine1FromColleague($event): void{ 
    this.newAdd.addLine1 = $event;
  } 
  
  getAddLine2FromColleague(temp: any): void{
    this.newAdd.addLine2 = temp;
  }

  getCityFromColleague(temp: any): void{
    this.newAdd.city = temp;
  }
  getZipcodeFromColleague(temp: any): void{
    this.newAdd.zipcode = temp;
  }
  getStateFromColleague(temp: any): void{
    this.newAdd.state = temp;
  }

  getCountryFromColleague(temp: any): void{
    this.newAdd.country = temp;
  }

  getDatetimeFromColleague(temp: any): void{
    this.newAdd.created = temp;
  }

  ngOnInit(): void {
    this.colService.getAddress().subscribe(data=>{
      this.colService.listAddress=data;
      console.log(data);
    });

    this.colService.getColleague().subscribe(data=>{
      this.colService.listColleague=data;
      console.log(data);
    });

      // const input = document.getElementById('addressDrop') as HTMLInputElement | null;

      // if (input != null) {
      // console.log("input value",input.value); // 👉️ "Initial Value"
      // }
    }

  saveColleague()
  {
    console.log(this.ColleagueForm);
    if(this.ColleagueForm.get('addressId').value == 0)
    {
      this.colService.saveAddress2(this.newAdd).subscribe(result=>
        {console.log(result);})
        console.log("addressId",this.newAdd.addressId);
      console.log(this.colService.listAddress)
      // console.log(this.colService.addressData.next(this.newAdd));
      // console.log(this.newAdd.addressId)
    }  
    else
    {
      this.colService.saveColleague(this.ColleagueForm.value).subscribe(result=>{
      console.log(result);
      });
    }
    console.log("addressId using listaddress",this.colService.listAddress[-1].addressId);
    // this.colService.getAddress().subscribe(data=>{
    //   this.colService.listAddress=data;
    //   console.log("addressId recent",data[data.length].addressId);
    // });
      
  }

}

