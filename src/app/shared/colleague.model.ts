export class Address {
    
    addressId : number=0;
    addLine1 : string;
    addLine2 :string;
    city : string;
    zipcode : string;
    state :string;
    country : string;
    created : any;
}

export class Colleague {
    colleagueId : number=0;
    addressId : number=0;
    colleagueName : string;
    created : any;
}

export class Department {
    departmentId : number=0;
    departmentName : string;
    created : any;
}

export class DeptColleague {
    id : number;
    colleagueId : number=0;
    departmentId : number=0;
}