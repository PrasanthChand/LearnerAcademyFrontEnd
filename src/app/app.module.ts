import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { GetStudentByIdComponent } from './get-student-by-id/get-student-by-id.component';
import { GetAllStudentsComponent } from './get-all-students/get-all-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { RemoveStudentComponent } from './remove-student/remove-student.component';
import { StudentService } from './student.service';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    GetStudentByIdComponent,
    GetAllStudentsComponent,
    UpdateStudentComponent,
    RemoveStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
