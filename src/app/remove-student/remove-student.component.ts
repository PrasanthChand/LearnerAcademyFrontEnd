import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.css']
})
export class RemoveStudentComponent implements OnInit {

  constructor(private service: StudentService, private router: Router) {

  }
  public student: Student;
  public students: Student[]=[];
  public studentId: number;

  // removeStudent() {
  //   let i = 1;
  //   this.service.removeStudent(this.studentId).forEach(s => {
  //     if (s.studentId == this.studentId) {
  //       this.students.splice(i, 1);
  //     }
  //     i++;
  //   });
  // }

  removeStudent() {
    return this.service.removeStudent(this.studentId).subscribe(data => {
      this.student = data;
      this.students.pop;
      this.router.navigate(['/getAllStudents']);
    })
  }

  ngOnInit() {
    this.service.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

}
