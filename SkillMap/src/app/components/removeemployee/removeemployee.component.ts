import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeservicesService } from '../../shared/services/employeeservices.service';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-removeemployee',
  templateUrl: './removeemployee.component.html',
  styleUrls: ['./removeemployee.component.css']
})
export class RemoveemployeeComponent implements OnInit {
  

  constructor(public empService: EmployeeservicesService) { }

  ngOnInit() {
 
     

    const e = new Employee();
    e.employeeId = 40;
    e.name ='Sonam';
    e.contactNo = '8828097172';
    e.isPending = true;
    e.mailId = 'sonamsoni@gmail.com';
    e.passwrd = '1234';
    e.userType = 'Employee';
    
    this.empService.removeEmp(e).subscribe(data => { console.log('success') },
      (err: any) => { console.log(err) });
  }

}
