import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';


@Component({
  selector: 'app-get-subject-by-id',
  templateUrl: './get-subject-by-id.component.html',
  styleUrls: ['./get-subject-by-id.component.css']
})
export class GetSubjectByIdComponent {
  public subject: Subject;
  public subjectId: number;

  constructor(private service: SubjectService) { 
    this.subject = new Subject();
  }

  getSubjectById() {
    this.service.getSubjectById(this.subjectId).subscribe(data => {
      this.subject = data;
    });
  }
}

