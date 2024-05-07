import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/_model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-lookcourse',
  templateUrl: './lookcourse.component.html',
  styleUrls: ['./lookcourse.component.css']
})
export class LookcourseComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  redirectToCourseDetails(): void {
    // Rediriger vers /voircours
    this.router.navigateByUrl('/DanceScape/voircours');
  }
}
