import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
    selector: 'app-update-classes',
    templateUrl: './update-classes.component.html',
    styleUrls: ['./update-classes.component.css']
})
export class UpdateClassesComponent implements OnInit {
    public classes: Classes;
    public classess: Classes[];
    public student: Student;
    public students: Student[];
    public teacher: Teacher;
    public teachers: Teacher[];
    public subject: Subject;
    public subjects: Subject[];
    constructor(private service: ClassesService,
        private service1: StudentService,
        private service2: SubjectService,
        private service3: TeacherService,
        private route: Router) {
        this.classes = new Classes();
        this.student = new Student();
        this.subject = new Subject();
        this.teacher = new Teacher();
    }

    updateClasses() {
        return this.service.updateClasses(this.classes).subscribe(data => {
            this.classes = new Classes();
            this.student = new Student();
            this.subject = new Subject();
            this.teacher = new Teacher();
            this.route.navigate(['/getAllClasses']);
        });
    }

    ngOnInit() {
        this.service.getAllClasses().subscribe(data => {
            this.classess = data;
            console.log(this.classess);
        });
    }
}
