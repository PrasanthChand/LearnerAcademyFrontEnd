import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  public student: Student;
  public students: Student[];
  constructor(private service: StudentService, private route: Router) {
    this.student = new Student();
  }
 
  updateStudent(){
   return this.service.updateStudent(this.student).subscribe(data => {
       this.student = new Student();
       this.route.navigate(['/getAllStudents']);
    });
  }

  ngOnInit() {
    this.service.getAllStudents().subscribe(data=>{
    this.students=data;
    });
  }
}
