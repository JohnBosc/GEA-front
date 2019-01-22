import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { EmployeeCreateComponent } from './employeeCreate/employeeCreate.component';
import { EmployeeProfileComponent } from './employeeProfile/employeeProfile.component';
import {Error4Component} from "../error/error4/error4.component";

export const EmployeeRoutes: Routes = [{
      path: 'list',
      component: EmployeeListComponent
    },{
      path: 'create',
      component: EmployeeCreateComponent
    }, {
      path: 'profile', component: EmployeeProfileComponent
    },{
      path: '**', component: Error4Component
    }

];
