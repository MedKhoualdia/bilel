import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/_model/Certification';
import { CertificationService } from 'src/app/service/certification.service';

@Component({
  selector: 'app-listcertificat',
  templateUrl: './listcertificat.component.html',
  styleUrls: ['./listcertificat.component.css']
})
export class ListcertificatComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private certificationService: CertificationService) { }

  ngOnInit(): void {
    this.getCertifications();
  }

  getCertifications(): void {
    this.certificationService.getCertifications()
      .subscribe(certifications => this.certifications = certifications);
  }

  deleteCertification(id: number): void {
    this.certificationService.deleteCertificationById(id)
      .subscribe(() => {
        console.log(`Certification avec l'ID ${id} supprimée avec succès.`);
        // Mettez à jour la liste des certifications après la suppression.
        this.getCertifications();
      }, error => {
        console.error('Erreur lors de la suppression de la certification :', error);
        // Gérez les erreurs en cas d'échec de la suppression.
      });
  }
}
