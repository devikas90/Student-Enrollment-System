import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { EmpregisterComponent } from './empregister/empregister.component';
import { EmployeeapprovalComponent } from './employeeapproval/employeeapproval.component';
import { EmployeesComponent } from './employees/employees.component';
import { SearchComponent } from './search/search.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';
import { AdminguardGuard } from './adminguard.guard';
import { EmployeeguardGuard } from './employeeguard.guard';

const routes: Routes = [
  {
    path:"",
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'add-course',
    component:AddCourseComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'enroll',
    component:RegisterformComponent
  },
  {
    path:'students',
    component:StudentsComponent,
    canActivate:[EmployeeguardGuard]
  },
  {
    path:'student',
    component:MyprofileComponent
  },
  {
    path:'login',
    component:LoginComponent,
    children:[
      {
        path:'studentlogin',
        component:StudentloginComponent
      },
      {
        path:'employeesignup',
        component:EmpregisterComponent
      }
    ]
  },
  {
    path:'employee-approval',
    component:EmployeeapprovalComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:'employees',
    component:EmployeesComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:'search',
    component:SearchComponent,
    canActivate:[EmployeeguardGuard]

  },
  {
    path:'update-course',
    component:UpdateCourseComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:'update-employee',
    component:UpdateEmployeeComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:'update-student',
    component:UpdateStudentComponent
  },
  {
    path:'mark-entry',
    component:MarkEntryComponent,
    canActivate:[EmployeeguardGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
