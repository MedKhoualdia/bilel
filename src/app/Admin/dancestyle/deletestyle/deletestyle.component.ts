import { Component } from '@angular/core';
import { DancestyleService } from 'src/app/service/dancestyle.service';

@Component({
  selector: 'app-deletestyle',
  templateUrl: './deletestyle.component.html',
  styleUrls: ['./deletestyle.component.css']
})
export class DeletestyleComponent {
  id: number = 0; // Définissez une propriété pour stocker l'ID du style de danse à supprimer

  constructor(private danceStyleService: DancestyleService) { }

  deleteStyle(): void {
    this.danceStyleService.deleteDanceStyleById(this.id).subscribe(() => {
      // Gérer la suppression réussie, par exemple rafraîchir la liste des styles de danse
    });
  }
}
