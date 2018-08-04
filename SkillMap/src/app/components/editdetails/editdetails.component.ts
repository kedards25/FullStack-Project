import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/employee.model';
import { Router } from '../../../../node_modules/@angular/router';
import { EmployeeservicesService } from '../../shared/services/employeeservices.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {

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
    this.empService.editDetails(e).subscribe(data => { alert('success') },
      (err: any) => { console.log(err) });
  }

}
