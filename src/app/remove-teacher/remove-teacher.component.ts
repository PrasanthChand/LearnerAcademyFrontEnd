import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-remove-teacher',
  templateUrl: './remove-teacher.component.html',
  styleUrls: ['./remove-teacher.component.css']
})
export class RemoveTeacherComponent implements OnInit {

  constructor(private service: TeacherService, private router: Router) {

  }
  public teacher: Teacher;
  public teachers: Teacher[]=[];
  public teacherId: number;

  removeTeacher() {
    return this.service.removeTeacher(this.teacherId).subscribe(data => {
      this.teacher = data;
      this.teachers.pop;
      this.router.navigate(['/getAllTeachers']);
    })
  }

  ngOnInit() {
    this.service.getAllTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

}
