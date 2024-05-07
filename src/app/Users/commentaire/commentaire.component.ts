import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/_model/commentaire';
import { CommentaireService } from 'src/app/service/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  comments: Commentaire[] = [];
  newComment: Commentaire = {
    id: 0,
    username: '',
    contenu: '' // Modifier la propriété content en contenu
  };

  constructor(private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
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
}
