import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { ApproveemployeeComponent } from './components/approveemployee/approveemployee.component';
import { RemoveemployeeComponent } from './components/removeemployee/removeemployee.component';
import { EditdetailsComponent } from './components/editdetails/editdetails.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'details',component:EmployeedetailsComponent},
  {path:'approveEmp',component:ApproveemployeeComponent},
  {path:'editDetails',component:EditdetailsComponent},
  {path:'removeEmp',component:RemoveemployeeComponent},
  {path:'**',redirectTo:'/register'}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
