import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../../shared/services/employeeservices.service';
import { Employee } from '../../shared/models/employee.model';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-approveemployee',
  templateUrl: './approveemployee.component.html',
  styleUrls: ['./approveemployee.component.css']
})
export class ApproveemployeeComponent implements OnInit {

  employeeId: string;
  contactNo: string;
  mailId: string;
  name: string;
  passwrd: string;
  userType: string;

  constructor(public empService: EmployeeservicesService, public router: Router) { }

  ngOnInit() {
    const e = new Employee();
    e.employeeId = 40;
    e.name ='Sonam';
    e.contactNo = '8828097172';
    e.isPending = true;
    e.mailId = 'sonamsoni@gmail.com';
    e.passwrd = '1234';
    e.userType = 'Employee';
    this.empService.approveEmp(e).subscribe(data => { console.log('success') },
      (err: any) => { console.log(err) });
  }

}
