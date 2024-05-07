import { Component } from '@angular/core';
import { Danceschool } from 'src/app/_model/danceschool';

import { DanceschoolService } from 'src/app/service/danceschool.service';

@Component({
  selector: 'app-addschool',
  templateUrl: './addschool.component.html',
  styleUrls: ['./addschool.component.css']
})
export class AddschoolComponent {
  newSchool: Danceschool = {
    id: 0, // Initialisez l'ID à 0 par défaut ou laissez-le undefined si vous ne voulez pas le spécifier lors de l'ajout
    name: '',
    position: '',
    horaire: '',
    imageUrl: '' // Ajoutez également la propriété imageUrl
  };

  constructor(private danceSchoolService: DanceschoolService) { }

  addSchool(): void {
    if (this.isValidSchool(this.newSchool)) {
      this.danceSchoolService.addDanceSchool(this.newSchool)
        .subscribe((response) => {
          console.log('Nouvelle école de danse ajoutée :', response);
          // Réinitialiser les données du formulaire après l'ajout réussi
          this.newSchool = {
            id: 0, // Réinitialisez également l'ID
            name: '',
            position: '',
            horaire: '',
            imageUrl: '' // Réinitialisez également l'URL de l'image
          };
        });
    } else {
      console.error('Les données de l\'école de danse ne sont pas valides.');
    }
  }

  private isValidSchool(school: Danceschool): boolean {
    return school.name.trim() !== '' && school.position.trim() !== '' && school.horaire.trim() !== '';
  }
  handleImageSelect(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.newSchool.imageUrl = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}
