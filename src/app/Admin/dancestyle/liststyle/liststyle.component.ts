import { Component, OnInit } from '@angular/core';
import { DanceStyle } from 'src/app/_model/dancestyle';
import { DancestyleService } from 'src/app/service/dancestyle.service';

@Component({
  selector: 'app-liststyle',
  templateUrl: './liststyle.component.html',
  styleUrls: ['./liststyle.component.css']
})
export class ListstyleComponent implements OnInit {
  danceStyles: DanceStyle[] = [];

  constructor(private danceStyleService: DancestyleService) { }

  ngOnInit(): void {
    this.getDanceStyles();
  }

  getDanceStyles(): void {
    this.danceStyleService.getDanceStyles()
      .subscribe(danceStyles => this.danceStyles = danceStyles);
  }

  deleteDanceStyle(id: number): void {
    this.danceStyleService.deleteDanceStyleById(id)
      .subscribe(() => {
        console.log(`Style de danse avec l'ID ${id} supprimé avec succès.`);
        // Mettez à jour la liste des styles de danse après la suppression.
        this.getDanceStyles();
      }, error => {
        console.error('Erreur lors de la suppression du style de danse :', error);
        // Gérez les erreurs en cas d'échec de la suppression.
      });
  }
}
