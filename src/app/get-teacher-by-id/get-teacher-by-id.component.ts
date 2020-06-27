import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-get-teacher-by-id',
  templateUrl: './get-teacher-by-id.component.html',
  styleUrls: ['./get-teacher-by-id.component.css']
})
export class GetTeacherByIdComponent {
  public teacher: Teacher;
  public teacherId: number;

  constructor(private service: TeacherService) { 
    this.teacher = new Teacher();
  }

  getTeacherById() {
    this.service.getTeacherById(this.teacherId).subscribe(data => {
      this.teacher = data;
    });
  }
}

