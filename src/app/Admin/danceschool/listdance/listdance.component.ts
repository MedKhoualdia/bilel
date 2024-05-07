import { Component, OnInit } from '@angular/core';
import { Danceschool } from 'src/app/_model/danceschool';
import { DanceschoolService } from 'src/app/service/danceschool.service';

@Component({
  selector: 'app-listdance',
  templateUrl: './listdance.component.html',
  styleUrls: ['./listdance.component.css']
})
export class ListdanceComponent implements OnInit {
  danceSchools: Danceschool[] = [];

  constructor(private danceSchoolService: DanceschoolService) { }

  ngOnInit(): void {
    this.getDanceSchools();
  }

  getDanceSchools(): void {
    this.danceSchoolService.getDanceSchools()
      .subscribe(danceSchools => this.danceSchools = danceSchools);
  }
  deleteDanceSchool(id: number): void {
    this.danceSchoolService.deleteDanceSchoolById(id)
      .subscribe(() => {
        console.log(`École de danse avec ID ${id} supprimée avec succès.`);
        // Ajoutez ici le code pour mettre à jour la liste des écoles de danse après la suppression.
        this.getDanceSchools();
      }, error => {
        console.error('Erreur lors de la suppression de l\'école de danse :', error);
        // Ajoutez ici la gestion des erreurs en cas d'échec de la suppression.
      });
  }
}
