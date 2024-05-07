import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../_model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'http://localhost:8088/api/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.courseUrl, course);
  }

  deleteCourseById(id: number): Observable<void> {
    const deleteUrl = `${this.courseUrl}/${id}`;
    return this.http.delete<void>(deleteUrl);
  }


}

