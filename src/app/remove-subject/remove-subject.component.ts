import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-remove-subject',
  templateUrl: './remove-subject.component.html',
  styleUrls: ['./remove-subject.component.css']
})
export class RemoveSubjectComponent implements OnInit {

  constructor(private service: SubjectService, private router: Router) {

  }
  public subject: Subject;
  public subjects: Subject[]=[];
  public subjectId: number;

  removeSubject() {
    return this.service.removeSubject(this.subjectId).subscribe(data => {
      this.subject = data;
      this.subjects.pop;
      this.router.navigate(['/getAllSubject']);
    })
  }

  ngOnInit() {
    this.service.getAllSubject().subscribe(data => {
      this.subjects = data;
    });
  }

}
