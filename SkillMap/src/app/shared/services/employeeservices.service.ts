import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {

  constructor(public http:HttpClient) { }

  getAllEmpDetails(): Observable<Employee[]> {
    const empURL:string="http://localhost:8087/SkillMap_REST_Demo/api/emp/";

    return this.http.get<Employee[]>(empURL);
  }

  registerEmployee(employee:Employee):Observable<any>
  {
    const regURL:string="http://localhost:8087/SkillMap_REST_Demo/api/emp/";
    return this.http.post<any>(regURL,employee);
  }

  approveEmp(employee:Employee):Observable<any>
  {
    const regURL:string="http://localhost:8087/SkillMap_REST_Demo/api/emp/";
    return this.http.put<any>(regURL,employee);
  }

  loginUser(employee:Employee):Observable<any>
  {
    const loginURL:string="http://localhost:8087/SkillMap_REST_Demo/api/emp/auth";
    return this.http.post<any>(loginURL,employee);
  }
  removeEmp(employee:Employee):Observable<any>
  {
       const httpOptions = {body: {employee},
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };  
    const loginURL:string="http://localhost:8087/SkillMap_REST_Demo/api/emp/";
    return this.http.delete<any>(loginURL,httpOptions);
  }

  editDetails(employee:Employee):Observable<any>
  {
    const regURL:string="http://localhost:8087/SkillMap_REST_Demo/api/emp/";
    return this.http.put<any>(regURL,employee);
  }
}
