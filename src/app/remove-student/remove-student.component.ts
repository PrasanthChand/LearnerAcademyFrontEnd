import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.css']
})
export class RemoveStudentComponent {

  constructor(private service: StudentService) { }
  public students: Student[];
  public studentId: number;

  removeStudent() {
        let i=1;
          this.service.removeStudent(this.studentId).forEach(s=>{
          console.log(s.studentId);
          if(s.studentId==this.studentId){
            this.students.splice(i,1);
          }
          i++;
        });
        }
  
}
