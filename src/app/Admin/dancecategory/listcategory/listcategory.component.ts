import { Component, OnInit } from '@angular/core';
import { DanceCategory } from 'src/app/_model/dancecategory';
import { DanceCategoryService } from 'src/app/service/dancecategory.service';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {
  categories: DanceCategory[] = [];

  constructor(private danceCategoryService: DanceCategoryService) { }

  ngOnInit(): void {
    this.getDanceCategories();
  }

  getDanceCategories(): void {
    this.danceCategoryService.getDanceCategories()
      .subscribe(categories => this.categories = categories);
  }

  deleteCategory(id: number): void {
    this.danceCategoryService.deleteDanceCategoryById(id)
      .subscribe(() => {
        console.log(`Catégorie de danse avec l'ID ${id} supprimée avec succès.`);
        // Mettez à jour la liste des catégories après la suppression.
        this.getDanceCategories();
      }, error => {
        console.error('Erreur lors de la suppression de la catégorie de danse :', error);
        // Gérez les erreurs en cas d'échec de la suppression.
      });
  }
}
