import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-update-classes',
  templateUrl: './update-classes.component.html',
  styleUrls: ['./update-classes.component.css']
})
export class UpdateClassesComponent implements OnInit{
  public classes: Classes;
  public classess: Classes[];
  constructor(private service: ClassesService, private route: Router) {
    this.classes = new Classes();
  }

  updateClasses(){
   return this.service.updateClasses(this.classes).subscribe(data => {
       this.classes = new Classes();
       this.route.navigate(['/getAllClasses']);
    });
  }

  ngOnInit() {
    this.service.getAllClasses().subscribe(data=>{
    this.classess=data;
    });
  }
}
