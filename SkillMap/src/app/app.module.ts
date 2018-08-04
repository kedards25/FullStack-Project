import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeservicesService } from './shared/services/employeeservices.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { FormsModule } from '@angular/forms';
import { ApproveemployeeComponent } from './components/approveemployee/approveemployee.component';
import { RemoveemployeeComponent } from './components/removeemployee/removeemployee.component';
import { EditdetailsComponent } from './components/editdetails/editdetails.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployeedetailsComponent,
    ApproveemployeeComponent,
    RemoveemployeeComponent,
    EditdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [EmployeeservicesService],
  bootstrap: [AppComponent],
})


export class AppModule { }
