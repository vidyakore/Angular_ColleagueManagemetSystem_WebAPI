import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ColleagueService } from '../../shared/colleague.service';
import { DatePipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-address-in-colleague',
  templateUrl: './add-address-in-colleague.component.html',
  styleUrls: ['./add-address-in-colleague.component.css']
})
export class AddAddressInColleagueComponent implements OnInit {

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

  @Output()
  sendAddLine1: EventEmitter<any> = new EventEmitter();

  @Output()
  sendAddLine2: EventEmitter<any> = new EventEmitter();

  @Output()
  city: EventEmitter<any> = new EventEmitter();

  @Output()
  zipcode: EventEmitter<any> = new EventEmitter();

  @Output()
  state: EventEmitter<any> = new EventEmitter();

  @Output()
  country: EventEmitter<any> = new EventEmitter();

  @Output()
  dateTime: EventEmitter<any> = new EventEmitter();


  sendAddLine1ToColleague(temp:any){
  this.sendAddLine1.emit(temp);
  }

  sendAddLine2ToColleague(temp:any){
  this.sendAddLine2.emit(temp);
  }

  sendCityToColleague(temp:any){
  this.city.emit(temp);
  }

  sendZipcodeToColleague(temp:any){
    this.zipcode.emit(temp);
    }

  sendStateToColleague(temp:any)
  {
    this.state.emit(temp);
  }
  sendCountryToColleague(temp:any){
    this.country.emit(temp);
    }

  sendDatetimeToColleague(temp:any){
    this.dateTime.emit(temp);
    }


  ngOnInit(): void {
    this.colService.getAddress().subscribe(data=>{
      this.colService.listAddress=data;
      console.log(data);
    });
  }

}
