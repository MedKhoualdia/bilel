import { Component } from '@angular/core';

@Component({
  selector: 'app-obce',
  templateUrl: './obce.component.html',
  styleUrls: ['./obce.component.css']
})
export class ObceComponent {
  firstName: string = '';
  lastName: string = '';
  id: string = '';

  generateCertificate(): void {
    // Informations de l'utilisateur
    const fullName = `${this.firstName} ${this.lastName}`;
    const userId = this.id;

    // Contenu du certificat avec les informations de l'utilisateur
    const certificateContent = `
      CERTIFICAT

      DanceScape Explorer atteste que ${fullName} (identifiant: ${userId}) a réussi la formation.

      Date: ${new Date().toLocaleDateString()}
    `;

    // Création d'un objet Blob pour le contenu du certificat
    const certificateBlob = new Blob([certificateContent], { type: 'text/plain' });

    // Création d'un URL pour le Blob
    const certificateUrl = URL.createObjectURL(certificateBlob);

    // Création d'un lien pour le téléchargement du certificat
    const downloadLink = document.createElement('a');
    downloadLink.href = certificateUrl;
    downloadLink.download = 'certificate.txt';
    downloadLink.click();
  }
}
