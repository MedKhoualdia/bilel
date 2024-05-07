import { Component } from '@angular/core';
import { Certification } from 'src/app/_model/Certification';
import { CertificationService } from 'src/app/service/certification.service'; // Assurez-vous d'importer CertificationService depuis le bon chemin
import { Danceschool } from 'src/app/_model/danceschool'; // Assurez-vous d'importer Danceschool depuis le bon chemin

@Component({
  selector: 'app-addcertification',
  templateUrl: './addcertification.component.html',
  styleUrls: ['./addcertification.component.css']
})
export class AddcertificationComponent {

  newCertification: Certification = {
    id: 0,
    name: '',
    isCertified: false,
    danceSchool: {} as Danceschool // Utilisation du modèle Danceschool
  };

  constructor(private certificationService: CertificationService) { }

  addCertification(): void {
    if (this.isValidCertification(this.newCertification)) {
      this.certificationService.addCertification(this.newCertification)
        .subscribe((response: Certification) => { // Spécifiez le type de réponse comme Certification
          console.log('Nouvelle certification ajoutée :', response);
          this.resetForm();
        });
    } else {
      console.error('Les données de la certification ne sont pas valides.');
    }
  }

  private isValidCertification(certification: Certification): boolean {
    return certification.name.trim() !== '';
  }

  private resetForm(): void {
    this.newCertification = {
      id: 0,
      name: '',
      isCertified: false,
      danceSchool: {} as Danceschool // Réinitialisation de danceSchool
    };
  }
}
