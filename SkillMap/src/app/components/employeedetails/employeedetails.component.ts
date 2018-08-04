import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../../shared/services/employeeservices.service';
import { Employee } from '../../shared/models/employee.model';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  empList:Employee[];

  constructor(public empDetlsService:EmployeeservicesService) { }
  
  ngOnInit() {
    this.empList=new Array();
    this.getDetails();
  }

  getDetails():void
  {
      this.empDetlsService.getAllEmpDetails().subscribe(data=>this.empList=data);  
      
  }
}
