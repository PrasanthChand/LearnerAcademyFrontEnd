import { Component, OnInit } from '@angular/core';
import {Classes} from '../classes'
import { ClassesService } from '../classes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-classes',
  templateUrl:'./create-classes.component.html',
  styleUrls: ['./create-classes.component.css']
})
export class CreateClassesComponent  {
public classes: Classes;
  constructor(private service:ClassesService, private router:Router) { 
    this.classes = new Classes();
  }
createClasses(){
  this.service.createClasses(this.classes).subscribe(data=>{
    this.classes = new Classes();
    this.router.navigate(['/getAllClasses']);
  });
}

}
