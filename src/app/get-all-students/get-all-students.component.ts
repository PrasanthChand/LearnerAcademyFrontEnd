import { Component, OnInit } from '@angular/core';
import {Student } from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit {
public student: Student[];
  constructor(private service:StudentService) { }

  ngOnInit() {
    this.service.getAllStudents().subscribe(data=>{
    this.student=data;
    });
  }

}
