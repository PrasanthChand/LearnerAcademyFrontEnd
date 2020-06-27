import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classes } from './classes';

@Injectable({
  providedIn: 'root'
})

export class ClassesService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/Learner_Academy/Classes"
  }

  public getAllClasses(): Observable<Classes[]> {
    return this.http.get<Classes[]>(this.url);
  }

  public createClasses(classes: Classes) {
    return this.http.post<Classes>(this.url, classes);
  }

  public getClassesById(classId: number): Observable<Classes> {
    return this.http.get<Classes>(this.url + "/" + classId);
  }

  public removeClasses(classId: number): Observable<Classes> {
    return this.http.delete<Classes>(this.url + "/" + classId);
  }

  public updateClasses(classes: Classes) {
    return this.http.patch<Classes>(this.url, classes);
  }

}
