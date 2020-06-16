import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { GetAllStudentsComponent } from './get-all-students/get-all-students.component';
import { GetStudentByIdComponent } from './get-student-by-id/get-student-by-id.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  {path:"createStudent", component:CreateStudentComponent},
  {path:"getAllStudents", component:GetAllStudentsComponent},
  {path:"getStudentById", component:GetStudentByIdComponent},
  {path:"removeStudent", component:RemoveStudentComponent},
  {path:"updateStudent", component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
