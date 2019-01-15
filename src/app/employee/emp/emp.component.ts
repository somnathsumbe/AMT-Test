import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
selectempcountrediobtn:string="All";

  employees: any = [];
  constructor() {
    this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '6/25/1988'
      },
      {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
      },
      {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/8/1979'
      },
      {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '10/14/1980'
      },
      {
        code: 'emp105', name: 'Nancy', gender: 'Female',
        annualSalary: 6700.826, dateOfBirth: '12/15/1982'
      },

      {
        code: 'emp106', name: 'Nathan', gender: 'Male',
        annualSalary: 6700.826, dateOfBirth: '12/15/1982'
      },
    ];
  }

  ngOnInit() {
  }

  
  gettotalempcount(): any {
    return this.employees.length;
  }

  getmaleempcount(): any {
    return this.employees.filter(e=>e.gender==="Male").length;
  }

  getfemeleempcount(): any {
    return this.employees.filter(e=>e.gender==="Female").length;
  }

  

}
