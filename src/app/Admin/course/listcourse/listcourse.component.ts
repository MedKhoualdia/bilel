import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styleUrls: ['./listcourse.component.css']
})
export class ListcourseComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  deleteCourse(id: number): void {
    this.courseService.deleteCourseById(id)
      .subscribe(() => {
        console.log(`Cours avec l'ID ${id} supprimé avec succès.`);
        // Mettez à jour la liste des cours après la suppression.
        this.getCourses();
      }, error => {
        console.error('Erreur lors de la suppression du cours :', error);
        // Gérez les erreurs en cas d'échec de la suppression.
      });
  }
}
