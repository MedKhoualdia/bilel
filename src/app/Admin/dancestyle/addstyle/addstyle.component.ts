import { Component, OnInit } from '@angular/core';
import { DanceStyle } from 'src/app/_model/dancestyle';
import { DancestyleService } from 'src/app/service/dancestyle.service';

@Component({
  selector: 'app-addstyle',
  templateUrl: './addstyle.component.html',
  styleUrls: ['./addstyle.component.css']
})
export class AddstyleComponent implements OnInit {
  newDanceStyle: DanceStyle = {
    id: 0,
    name: ''
  };
  danceStyles: DanceStyle[] = [];

  constructor(private danceStyleService: DancestyleService) { }

  ngOnInit(): void {
    this.getDanceStyles();
  }

  addDanceStyle(): void {
    if (this.isValidDanceStyle(this.newDanceStyle)) {
      this.danceStyleService.addDanceStyle(this.newDanceStyle)
        .subscribe((response) => {
          console.log('Nouveau style de danse ajouté :', response);
          this.resetForm();
          this.getDanceStyles(); // Rafraîchir la liste des styles après l'ajout
        });
    } else {
      console.error('Les données du style de danse ne sont pas valides.');
    }
  }

  private isValidDanceStyle(danceStyle: DanceStyle): boolean {
    return danceStyle.name.trim() !== '';
  }

  private resetForm(): void {
    this.newDanceStyle = {
      id: 0,
      name: ''
    };
  }

  // Méthode pour récupérer les styles de danse depuis le service approprié
  getDanceStyles(): void {
    this.danceStyleService.getDanceStyles()
      .subscribe(styles => this.danceStyles = styles);
  }
}
