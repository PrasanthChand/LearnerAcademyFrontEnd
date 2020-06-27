import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/Learner_Academy/Teacher"
  }

  public getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url);
  }

  public createTeacher(teacher: Teacher) {
    return this.http.post<Teacher>(this.url, teacher);
  }

  public getTeacherById(teacherId: number): Observable<Teacher> {
    return this.http.get<Teacher>(this.url + "/" + teacherId);
  }

  public removeTeacher(teacherId: number): Observable<Teacher> {
    return this.http.delete<Teacher>(this.url + "/" + teacherId);
  }

  public updateTeacher(teacher: Teacher) {
    return this.http.patch<Teacher>(this.url, teacher);
  }

}

