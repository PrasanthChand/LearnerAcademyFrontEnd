import { Component, OnInit } from '@angular/core';
import {Subject} from '../subject'
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subject',
  templateUrl:'./create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent  {
public subject: Subject;
  constructor(private service:SubjectService, private router:Router) { 
    this.subject = new Subject();
  }
createSubject(){
  this.service.createSubject(this.subject).subscribe(data=>{
    this.subject = new Subject();
    this.router.navigate(['/getAllSubject']);
  });
}

}
