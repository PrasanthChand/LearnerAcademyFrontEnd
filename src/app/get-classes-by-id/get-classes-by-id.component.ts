import { Component, OnInit } from '@angular/core';
import { Classes } from '../classes';
import { ClassesService } from '../classes.service';


@Component({
  selector: 'app-get-classes-by-id',
  templateUrl: './get-classes-by-id.component.html',
  styleUrls: ['./get-classes-by-id.component.css']
})
export class GetClassesByIdComponent {
  public classes: Classes;
  public classId: number;

  constructor(private service: ClassesService) { 
    this.classes = new Classes();
  }

  getClassesById() {
    this.service.getClassesById(this.classId).subscribe(data => {
      this.classes = data;
    });
  }
}
