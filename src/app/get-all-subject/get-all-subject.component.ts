import { Component, OnInit } from '@angular/core';
import {Subject} from '../subject';
import {SubjectService} from '../subject.service';

@Component({
  selector: 'app-get-all-subject',
  templateUrl: './get-all-subject.component.html',
  styleUrls: ['./get-all-subject.component.css']
})
export class GetAllSubjectComponent implements OnInit {
public subjects: Subject[];
  constructor(private service:SubjectService) { }

  ngOnInit() {
    this.service.getAllSubject().subscribe(data=>{
    this.subjects=data;
    });
  }

}
