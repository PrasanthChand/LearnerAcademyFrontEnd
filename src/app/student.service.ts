import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/Learner_Academy/Student"
  }

  public getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  public createStudent(student: Student) {
    return this.http.post<Student>(this.url, student);
  }

  public getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(this.url + "/" + studentId);
  }

  public removeStudent(studentId: number): Observable<Student> {
    return this.http.delete<Student>(this.url + "/" + studentId);
  }

  public updateStudent(student: Student) {
    return this.http.patch<Student>(this.url, student);
  }

}
