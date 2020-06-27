import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit{
  public subject: Subject;
  public subjects: Subject[];
  constructor(private service: SubjectService, private route: Router) {
    this.subject = new Subject();
  }

  updateSubject(){
   return this.service.updateSubject(this.subject).subscribe(data => {
       this.subject = new Subject();
       this.route.navigate(['/getAllSubject']);
    });
  }

  ngOnInit() {
    this.service.getAllSubject().subscribe(data=>{
    this.subjects=data;
    });
  }
}
