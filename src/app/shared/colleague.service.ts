import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address, Colleague, Department, DeptColleague } from './colleague.model';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  // [x: string]: any;

  constructor(private  myhttp:HttpClient) { }
    addressUrl:string = 'https://localhost:44354/api/Address';
    colleagueUrl :string= 'https://localhost:44354/api/Colleague';
    departmentUrl:string = 'https://localhost:44354/api/Department';
    deptColleagueUrl: string = 'https://localhost:44354/api/DeptColleague'
    listColleague:Colleague[] = []; //For Gettng data at the above url 
    listAddress: Address[]= [];

    listDepartment: Department[]=[];
    listDeptColleague: DeptColleague[] = [];

  addressData: BehaviorSubject<Address> = new BehaviorSubject(new Address());
  colleagueData : Colleague = new Colleague();
  departmentData : Department = new Department();
  deptColleagueData : DeptColleague = new DeptColleague();

  saveAddress(data:any)
  {
    const postData = {AddressId : data.addressId, AddressLine1:data.addressLine1, AddressLine2:data.addressLine2,City:data.city,Zipcode:data.zipcode,Country:data.country,created: data.created };
    console.log(postData);
    return this.myhttp.post(this.addressUrl,data);
  }

  saveAddress2(data:any)
  {
    const postData = {AddLine1:data.addLine1, AddLine2:data.addLine2,State:data.state,City:data.city,Zipcode:data.zipcode,Country:data.country,created: data.created };
    console.log(postData);
    return this.myhttp.post(this.addressUrl,postData);
  }

  getAddressById(id:number)
  {
    return this.myhttp.get(`${this.addressUrl}/${id}`)
  }

  
  updateAddressData(id:number,data:any)
  {
    return this.myhttp.put(`${this.addressUrl}/${id}`,data);
  }

  
  getAddress(): Observable<Address[]> {
    return this.myhttp.get<Address[]>(this.addressUrl);
  }

  deleteAdress(id:number)
  {
    return this.myhttp.delete(`${this.addressUrl}/${id}`)
  }

  //Colleague Functions
  

  getColleague(): Observable<Colleague[]>
  {
    return this.myhttp.get<Colleague[]>(this.colleagueUrl);
  }

  saveColleague(data:any)
  {
    // return this.myhttp.post(`${this.colleagueUrl}`,this.colleagueData);
    const postData = {AddressId : data.addressId, ColleagueName:data.colleagueName, created: data.created };
    console.log(postData);
    return this.myhttp.post(this.colleagueUrl,postData);
  }

  getColleagueById(id:number)
  {
    return this.myhttp.get(`${this.colleagueUrl}/${id}`)
  }

  UpdateColleagueData(id:number,data:any)
  {
    return this.myhttp.put(`${this.colleagueUrl}/${id}`,data);
  }

  deleteColleague(id:number)
  {
    return this.myhttp.delete(`${this.colleagueUrl}/${id}`)
  }


  //Department methods
  getDepartments(): Observable<Department[]>
  {
    return this.myhttp.get<Department[]>(this.departmentUrl);
  }

  deleteDepartment(id:number)
  {
    return this.myhttp.delete(`${this.departmentUrl}/${id}`)
  }

  saveDepartment(data : any)
  {
    const postData = {DeparmentId : data.deparmentId, DepartmentName:data.departmentName, created: data.created };
    console.log(postData);
    return this.myhttp.post(this.departmentUrl,postData);
  }

  getDepartmentById(id:number)
  {
    return this.myhttp.get(`${this.departmentUrl}/${id}`)
  }

  UpdateDepartmentData(id:number,data:any)
  {
    return this.myhttp.put(`${this.departmentUrl}/${id}`,data);
  }


  //Dept Colleague Methods
  getDeptColleague(): Observable<DeptColleague[]>
  {
    return  this.myhttp.get<DeptColleague[]>(this.deptColleagueUrl)
  }

  saveDeptColleague(data:any)
  {
    const postData = {id : data.id, ColleagueId:data.colleagueId, DepartmentId: data.departmentId };
    console.log(postData);
    return this.myhttp.post(this.deptColleagueUrl,postData);
  }

}

