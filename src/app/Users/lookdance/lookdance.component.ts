import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Danceschool } from 'src/app/_model/danceschool';
import { DanceschoolService } from 'src/app/service/danceschool.service';
import { Commentaire } from 'src/app/_model/commentaire';
import { CommentaireService } from 'src/app/service/commentaire.service';
import { Chart } from 'chart.js'; // Importez Chart.js

@Component({
  selector: 'app-lookdance',
  templateUrl: './lookdance.component.html',
  styleUrls: ['./lookdance.component.css']
})
export class LookdanceComponent implements OnInit, AfterViewInit {
  danceSchools: Danceschool[] = [];
  filteredDanceSchools: Danceschool[] = [];
  searchTerm: string = '';
  newComment: Commentaire = {
    id: 0,
    username: '',
    contenu: ''
  };
  comments: Commentaire[] = [];
  commentChart: any; // Ajoutez cette propriété pour le graphique

  @ViewChild('commentChart') commentChartRef!: ElementRef;

  constructor(private danceSchoolService: DanceschoolService, private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.getDanceSchools();
    this.loadComments();
  }

  ngAfterViewInit(): void {
    this.createCommentChart();
  }

  getDanceSchools(): void {
    this.danceSchoolService.getDanceSchools()
      .subscribe(danceSchools => {
        this.danceSchools = danceSchools;
        // Initialiser la liste filtrée avec toutes les écoles de danse au départ
        this.filteredDanceSchools = this.danceSchools;
      });
  }

  // Méthode pour filtrer les écoles de danse en fonction du terme de recherche
  filterDanceSchools() {
    if (this.searchTerm.trim() !== '') {
      this.filteredDanceSchools = this.danceSchools.filter(danceSchool =>
        danceSchool.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // Si le champ de recherche est vide, afficher toutes les écoles de danse
      this.filteredDanceSchools = this.danceSchools;
    }
  }

  loadComments(): void {
    // Charger les commentaires depuis le service
    this.commentaireService.getAllCommentaires()
      .subscribe(comments => this.comments = comments);
  }

  addComment(): void {
    if (this.isValidComment(this.newComment)) {
      this.commentaireService.addCommentaire(this.newComment)
        .subscribe((response) => {
          console.log('Nouveau commentaire ajouté :', response);
          this.resetForm();
          this.loadComments(); // Recharger les commentaires après l'ajout
        });
    } else {
      console.error('Les données du commentaire ne sont pas valides.');
    }
  }

  private isValidComment(comment: Commentaire): boolean {
    return comment.username.trim() !== '' && comment.contenu.trim() !== ''; // Utiliser contenu au lieu de content
  }

  private resetForm(): void {
    this.newComment = {
      id: 0,
      username: '',
      contenu: '' // Utiliser contenu au lieu de content
    };
  }

  createCommentChart(): void {
    this.commentChart = new Chart(this.commentChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Number of Comments',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], // Remplacez ces données par les données réelles
          fill: false,
          borderColor: 'rgb(75, 192, 192)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
