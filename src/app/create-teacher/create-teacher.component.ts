import { Component, OnInit } from '@angular/core';
import {Teacher} from '../teacher'
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl:'./create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent  {
public teacher: Teacher;
  constructor(private service:TeacherService, private router:Router) { 
    this.teacher = new Teacher();
  }
createTeacher(){
  this.service.createTeacher(this.teacher).subscribe(data=>{
    this.teacher = new Teacher();
    this.router.navigate(['/getAllTeachers']);
  });
}

}
