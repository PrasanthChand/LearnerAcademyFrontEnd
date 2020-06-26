import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-get-student-by-id',
  templateUrl: './get-student-by-id.component.html',
  styleUrls: ['./get-student-by-id.component.css']
})
export class GetStudentByIdComponent {
  public student: Student;
  public studentId: number;

  constructor(private service: StudentService) { 
    this.student = new Student();
  }

  getStudentById() {
    this.service.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    });
  }
}
