import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit{
  public teacher: Teacher;
  public teachers: Teacher[];

  constructor(private service: TeacherService, private route: Router) {
    this.teacher = new Teacher();
   }

  updateTeacher(){
   return this.service.updateTeacher(this.teacher).subscribe(data => {
       this.teacher = new Teacher();
       this.route.navigate(['/getAllTeachers']);
    });
  }

  ngOnInit() {
    this.service.getAllTeachers().subscribe(data=>{
    this.teachers=data;
    });
  }
}
