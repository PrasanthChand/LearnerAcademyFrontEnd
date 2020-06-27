import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStudentComponent } from './create-student/create-student.component';
import { GetAllStudentsComponent } from './get-all-students/get-all-students.component';
import { GetStudentByIdComponent } from './get-student-by-id/get-student-by-id.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { GetAllSubjectComponent } from './get-all-subject/get-all-subject.component';
import { GetSubjectByIdComponent } from './get-subject-by-id/get-subject-by-id.component';
import { RemoveSubjectComponent } from './remove-subject/remove-subject.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';

import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { GetAllTeachersComponent } from './get-all-teachers/get-all-teachers.component';
import { GetTeacherByIdComponent } from './get-teacher-by-id/get-teacher-by-id.component';
import { RemoveTeacherComponent } from './remove-teacher/remove-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';

import { CreateClassesComponent } from './create-classes/create-classes.component';
import { GetAllClassesComponent } from './get-all-classes/get-all-classes.component';
import { GetClassesByIdComponent } from './get-classes-by-id/get-classes-by-id.component';
import { RemoveClassesComponent } from './remove-classes/remove-classes.component';
import { UpdateClassesComponent } from './update-classes/update-classes.component';


const routes: Routes = [
  {path:"createStudent", component:CreateStudentComponent},
  {path:"getAllStudents", component:GetAllStudentsComponent},
  {path:"getStudentById", component:GetStudentByIdComponent},
  {path:"removeStudent", component:RemoveStudentComponent},
  {path:"updateStudent", component:UpdateStudentComponent},
  
  {path:"createSubject", component:CreateSubjectComponent},
  {path:"getAllSubject", component:GetAllSubjectComponent},
  {path:"getSubjectById", component:GetSubjectByIdComponent},
  {path:"removeSubject", component:RemoveSubjectComponent},
  {path:"updateSubject", component:UpdateSubjectComponent},

  {path:"createTeacher", component:CreateTeacherComponent},
  {path:"getAllTeachers", component:GetAllTeachersComponent},
  {path:"getTeacherById", component:GetTeacherByIdComponent},
  {path:"removeTeacher", component:RemoveTeacherComponent},
  {path:"updateTeacher", component:UpdateTeacherComponent},
 
  {path:"createClasses", component:CreateClassesComponent},
  {path:"getAllClasses", component:GetAllClassesComponent},
  {path:"getClassesById", component:GetClassesByIdComponent},
  {path:"removeClasses", component:RemoveClassesComponent},
  {path:"updateClasses", component:UpdateClassesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
