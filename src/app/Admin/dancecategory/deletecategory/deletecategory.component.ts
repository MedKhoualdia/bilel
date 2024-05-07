import { Component } from '@angular/core';
import { DanceCategoryService } from 'src/app/service/dancecategory.service';

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent {
  id: number = 0; // Définissez une propriété pour stocker l'ID de la catégorie de danse à supprimer

  constructor(private danceCategoryService: DanceCategoryService) { }

  deleteDanceCategory(): void {
    this.danceCategoryService.deleteDanceCategoryById(this.id).subscribe(() => {
      // Gérer la suppression réussie, par exemple rafraîchir la liste des catégories de danse
    }, error => {
      console.error('Erreur lors de la suppression de la catégorie de danse :', error);
      // Gérez les erreurs en cas d'échec de la suppression.
    });
  }
}

