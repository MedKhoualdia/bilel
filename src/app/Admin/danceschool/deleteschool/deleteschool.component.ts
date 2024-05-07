import { Component } from '@angular/core';
import { DanceschoolService } from 'src/app/service/danceschool.service';

@Component({
  selector: 'app-deleteschool',
  templateUrl: './deleteschool.component.html',
  styleUrls: ['./deleteschool.component.css']
})
export class DeleteschoolComponent {

  id: number = 0; // Définissez une propriété pour stocker l'ID de l'école à supprimer

  constructor(private danceSchoolService: DanceschoolService) { }

  deleteDanceSchool(): void {
    this.danceSchoolService.deleteDanceSchoolById(this.id).subscribe(() => {
      // Gérer la suppression réussie, par exemple rafraîchir la liste des écoles de danse
    });
  }
}
