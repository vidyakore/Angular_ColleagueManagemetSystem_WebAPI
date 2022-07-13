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
    addLine2: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    created: new FormControl( '' )
  });

  @Output()
  addLine1: EventEmitter<string> = new EventEmitter();

  @Output()
  addLine2: EventEmitter<string> = new EventEmitter();

  @Output()
  city: EventEmitter<string> = new EventEmitter();

  @Output()
  zipcode: EventEmitter<string> = new EventEmitter();

  @Output()
  state: EventEmitter<string> = new EventEmitter();

  @Output()
  country: EventEmitter<string> = new EventEmitter();

  @Output()
  created: EventEmitter<any> = new EventEmitter();


  sendAddLine1ToColleague(temp:string){
  this.addLine1.emit(temp);
  }

  sendAddLine2ToColleague(temp:string){
  this.addLine2.emit(temp);
  }

  sendCityToColleague(temp:string){
  this.city.emit(temp);
  }

  sendZipcodeToColleague(temp:string){
    this.zipcode.emit(temp);
    }

  sendStateToColleague(temp:string)
  {
    this.state.emit(temp);
  }
  sendCountryToColleague(temp:string){
    this.country.emit(temp);
    }

  sendDatetimeToColleague(temp:any){
    this.created.emit(temp);
    }


  ngOnInit(): void {
    this.colService.getAddress().subscribe(data=>{
      this.colService.listAddress=data;
      console.log(data);
    });
  }

}
