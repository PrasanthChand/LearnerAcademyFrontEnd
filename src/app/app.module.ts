import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { CreateStudentComponent } from './create-student/create-student.component';
import { GetStudentByIdComponent } from './get-student-by-id/get-student-by-id.component';
import { GetAllStudentsComponent } from './get-all-students/get-all-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component';
import { CreateClassesComponent } from './create-classes/create-classes.component';
import { GetAllClassesComponent } from './get-all-classes/get-all-classes.component';
import { GetClassesByIdComponent } from './get-classes-by-id/get-classes-by-id.component';
import { RemoveClassesComponent } from './remove-classes/remove-classes.component';
import { UpdateClassesComponent } from './update-classes/update-classes.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { GetAllTeachersComponent } from './get-all-teachers/get-all-teachers.component';
import { GetAllSubjectComponent } from './get-all-subject/get-all-subject.component';
import { GetTeacherByIdComponent } from './get-teacher-by-id/get-teacher-by-id.component';
import { GetSubjectByIdComponent } from './get-subject-by-id/get-subject-by-id.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { RemoveTeacherComponent } from './remove-teacher/remove-teacher.component';
import { RemoveSubjectComponent } from './remove-subject/remove-subject.component';
import { StudentService } from './student.service';
import { TeacherService } from './teacher.service';
import { SubjectService } from './subject.service';
import { ClassesService } from './classes.service';



@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    GetStudentByIdComponent,
    GetAllStudentsComponent,
    UpdateStudentComponent,
    RemoveStudentComponent,
    CreateClassesComponent,
    GetAllClassesComponent,
    GetClassesByIdComponent,
    RemoveClassesComponent,
    UpdateClassesComponent,
    CreateTeacherComponent,
    CreateSubjectComponent,
    GetAllTeachersComponent,
    GetAllSubjectComponent,
    GetTeacherByIdComponent,
    GetSubjectByIdComponent,
    UpdateSubjectComponent,
    UpdateTeacherComponent,
    RemoveTeacherComponent,
    RemoveSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService, ClassesService, SubjectService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
