import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';
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
        private service3: TeacherService) {
        this.classes = new Classes();
        this.student = new Student();
        this.subject = new Subject();
        this.teacher = new Teacher();
    }

    updateClasses() {

        this.mergeStudent();
        this.mergeSubject();
        this.mergeTeacher();

        return this.service.updateClasses(this.classes).subscribe(data => {
            this.classes = new Classes();
            this.student = new Student();
            this.subject = new Subject();
            this.teacher = new Teacher();

        });
    }

    ngOnInit() {
        this.service.getAllClasses().subscribe(data => {
            this.classess = data;

        });
    }

    mergeStudent() {
        var merge = this.classess.filter(data => {
            return data.classId == this.classes.classId
        })
        this.classes.student = merge[0].student;
        if (this.student.studentId && this.student.studentName) {
            console.log(merge[0].student);
            merge[0].student.push(this.student)
            this.classes.student = merge[0].student;
        }
    }
    mergeSubject() {
        var merge = this.classess.filter(data => {
            return data.classId == this.classes.classId
        })
        this.classes.subject = merge[0].subject;

        if (this.subject.subjectId && this.subject.subjectName) {
            console.log(merge[0].subject);
            merge[0].subject.push(this.subject)
            this.classes.subject = merge[0].subject;
        }
    }

    mergeTeacher() {
        var merge = this.classess.filter(data => {
            return data.classId == this.classes.classId
        })
        this.classes.teacher = merge[0].teacher;

        if (this.teacher.teacherId && this.teacher.teacherName) {
            console.log(merge[0].teacher);
            merge[0].teacher.push(this.teacher)
            this.classes.teacher = merge[0].teacher;
        }
    }
}
