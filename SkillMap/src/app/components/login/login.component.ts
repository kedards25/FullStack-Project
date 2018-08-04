import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../../shared/services/employeeservices.service';
import { Employee } from '../../shared/models/employee.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: EmployeeservicesService) { }

  ngOnInit() {
    const e = new Employee();
    e.mailId = 'kedard@gmail.com';
    e.passwrd = '123456';
    this.loginService.loginUser(e).subscribe(data => { console.log('success') },
      (err: any) => { console.log(err) });
  }
  

}
