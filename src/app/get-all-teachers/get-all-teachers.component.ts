import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';


@Component({
    selector: 'app-get-all-teachers',
    templateUrl: './get-all-teachers.component.html',
    styleUrls: ['./get-all-teachers.component.css']
})
export class GetAllTeachersComponent implements OnInit {
    public teachers: Teacher[];
    public teacher: Teacher;
  
  
    constructor(private service: TeacherService) {
         this.teacher = new Teacher();
     }

    ngOnInit() {
        this.service.getAllTeachers().subscribe(data => {
            this.teachers = data;
            
        });
       
    }

}
