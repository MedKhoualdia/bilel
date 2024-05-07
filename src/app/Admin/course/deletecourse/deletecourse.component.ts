import { Component } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-deletecourse',
  templateUrl: './deletecourse.component.html',
  styleUrls: ['./deletecourse.component.css']
})
export class DeletecourseComponent {

  id: number = 0; // Définissez une propriété pour stocker l'ID du cours à supprimer

  constructor(private courseService: CourseService) { }

  deleteCourse(): void {
    this.courseService.deleteCourseById(this.id).subscribe(() => {
      // Gérer la suppression réussie, par exemple rafraîchir la liste des cours
    });
  }
}