import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-remove-classes',
  templateUrl: './remove-classes.component.html',
  styleUrls: ['./remove-classes.component.css']
})
export class RemoveClassesComponent implements OnInit {

  constructor(private service: ClassesService, private router: Router) {

  }
  public classes: Classes;
  public classess: Classes[]=[];
  public classId: number;

  removeClasses() {
    return this.service.removeClasses(this.classId).subscribe(data => {
      this.classes = data;
      this.classess.pop;
      this.router.navigate(['/getAllClasses']);
    })
  }

  ngOnInit() {
    this.service.getAllClasses().subscribe(data => {
      this.classess = data;
    });
  }

}
