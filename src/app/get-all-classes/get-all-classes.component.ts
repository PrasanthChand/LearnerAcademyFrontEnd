import { Component, OnInit } from '@angular/core';
import {Classes } from '../classes';
import {ClassesService} from '../classes.service';

@Component({
  selector: 'app-get-all-classes',
  templateUrl: './get-all-classes.component.html',
  styleUrls: ['./get-all-classes.component.css']
})
export class GetAllClassesComponent implements OnInit {
public classes: Classes[];
  constructor(private service:ClassesService) { }

  ngOnInit() {
    this.service.getAllClasses().subscribe(data=>{
    this.classes=data;
    // console.log(this.classes);
    });
  }

}
