import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: string[] = [
    "La danse classique est née en France.",
    "Le ballet moderne est également appelé ballet contemporain.",
    "Le tango est une danse traditionnelle de quel pays ?",
    "Quel type de danse est caractérisé par des mouvements rapides et des acrobaties ?",
    "La salsa est originaire de quel pays ?"
  ];
  correctAnswers: string[] = ["true", "false", "Argentine", "breakdance", "Cuba"];

  userAnswers: string[] = [];

  score: number | null = null;

  constructor(private router: Router) { }

  finishQuiz(): void {
    // Calculer le score
    this.score = 0;
    for (let i = 0; i < this.correctAnswers.length; i++) {
      if (this.userAnswers[i] === this.correctAnswers[i]) {
        this.score++;
      }
    }

    // Rediriger l'utilisateur si le score est 5/5
    if (this.score === 5) {
      this.router.navigateByUrl('/DanceScape/obce');
    }
  }
}
