import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {StudentService} from '../student.service';


@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.css']
})
export class RemoveStudentComponent implements OnInit {
  // studentList: Student[];
  // studentIdModel: number;
  constructor() { }

  // removeStudent() {
  //   let i = 0;
  //   this.studentList.forEach(s => {
  //     if (s.studentId == this.studentIdModel) {
  //       this.studentList.splice(i, 1);
  //     }
  //     i++;
  //   });
  //   this.router.navigate(['/getAllStudents']);
  // }

  ngOnInit() :void {
  }

}
