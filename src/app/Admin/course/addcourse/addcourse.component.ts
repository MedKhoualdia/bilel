import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_model/course';
import { Danceschool } from 'src/app/_model/danceschool';
import { CourseService } from 'src/app/service/course.service';
import { DanceschoolService } from 'src/app/service/danceschool.service'; // Assurez-vous d'importer DanceschoolService depuis le bon chemin

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  newCourse: Course = {
    id: 0,
    name: '',
    instructor: '',
    schedule: '',
    danceSchool: {} as Danceschool,
    contenu: ''
  };
  danceSchools: Danceschool[] = []; // Déclarez la variable danceSchools ici

  constructor(private courseService: CourseService, private danceSchoolService: DanceschoolService) { }

  ngOnInit(): void {
    // Récupérer les écoles de danse lors de l'initialisation du composant
    this.getDanceSchools();
  }

  addCourse(): void {
    if (this.isValidCourse(this.newCourse)) {
      this.courseService.addCourse(this.newCourse)
        .subscribe((response) => {
          console.log('Nouveau cours ajouté :', response);
          this.resetForm();
        });
    } else {
      console.error('Les données du cours ne sont pas valides.');
    }
  }

  private isValidCourse(course: Course): boolean {
    return course.name.trim() !== '' && course.instructor.trim() !== '' && course.schedule.trim() !== '';
  }

  private resetForm(): void {
    this.newCourse = {
      id: 0,
      name: '',
      instructor: '',
      schedule: '',
      danceSchool: {} as Danceschool,
      contenu: ''
    };
  }

  // Méthode pour récupérer les écoles de danse depuis le service approprié
  private getDanceSchools(): void {
    this.danceSchoolService.getDanceSchools()
      .subscribe(danceSchools => this.danceSchools = danceSchools);
  }
}
