import { Component } from '@angular/core';
import { DanceCategoryService } from 'src/app/service/dancecategory.service'; // Assurez-vous d'importer DanceCategoryService depuis le bon chemin

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  newCategoryName: string = ''; // Nouveau nom de la catégorie à ajouter
  courseId: number = 3; // ID du cours associé à la catégorie (remplacez 3 par l'ID approprié)

  constructor(private danceCategoryService: DanceCategoryService) { }

  // Méthode appelée lors de la soumission du formulaire pour ajouter une nouvelle catégorie
  addCategory(): void {
    // Vérifiez si le nom de la catégorie n'est pas vide
    if (this.newCategoryName.trim() !== '') {
      // Utilisez le nom de la catégorie et l'ID du cours pour effectuer l'ajout dans la base de données
      this.danceCategoryService.addDanceCategory(this.newCategoryName, this.courseId)
        .subscribe((response) => {
          console.log('Nouvelle catégorie ajoutée :', response);
          // Réinitialisez les champs après l'ajout
          this.resetForm();
        }, error => {
          console.error('Erreur lors de l\'ajout de la catégorie :', error);
          // Gérez les erreurs en cas d'échec de l'ajout.
        });
    } else {
      console.error('Le nom de la catégorie ne peut pas être vide.');
    }
  }

  // Méthode pour réinitialiser le formulaire après l'ajout d'une catégorie
  private resetForm(): void {
    this.newCategoryName = '';
  }
}
