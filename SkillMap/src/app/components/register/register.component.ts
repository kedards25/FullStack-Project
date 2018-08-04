import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../../shared/services/employeeservices.service';
import { Employee } from '../../shared/models/employee.model';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employeeId: string;
  contactNo: string;
  mailId: string;
  name: string;
  passwrd: string;
  userType: string;

  constructor(public empService: EmployeeservicesService, public router: Router) { }

  ngOnInit() {
  }

  registerEmployee(): void {
    const e = new Employee();
    e.employeeId = parseInt(this.employeeId);
    e.name = this.name;
    e.contactNo = this.contactNo;
    e.isPending = true;
    e.mailId = this.mailId;
    e.passwrd = this.passwrd;
    e.userType = 'Employee';
    this.empService.registerEmployee(e).subscribe(data => { console.log('success'); this.router.navigate(['/details']) },
      (err: any) => { console.log(err) });
  }
}
