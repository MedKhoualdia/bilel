import { Component } from '@angular/core';

@Component({
  selector: 'app-cours-de-danse',
  templateUrl: './cours-de-danse.component.html',
  styleUrls: ['./cours-de-danse.component.css']
})
export class CoursDeDanseComponent {

  downloadContent(): void {
    // Contenu du cours
    const coursDeDanse = `
    # Cours de Danse Classique

    ## Introduction
    Le cours de danse classique est un voyage dans l'élégance intemporelle et la discipline rigoureuse du ballet. Ce cours offre aux étudiants une exploration approfondie des fondamentaux du ballet classique, mettant l'accent sur la technique, la posture, et l'expression artistique. Au fil des séances, les étudiants seront guidés à travers une série d'exercices et de mouvements qui renforcent la force musculaire, la souplesse, et la grâce du corps.

    ## Objectifs
    - Comprendre les bases du ballet classique, y compris les positions, les mouvements fondamentaux, et le vocabulaire spécifique.
    - Développer une conscience corporelle accrue, ainsi qu'une meilleure posture et coordination.
    - Explorer l'expression artistique à travers le mouvement et la musique.
    - Renforcer la discipline personnelle et la concentration à travers des exercices techniques et des répétitions.
    - Apprendre à interpréter et à exprimer des émotions à travers le langage universel de la danse.

    ## Contenu du Cours
    1. Échauffement et étirements: Commencer chaque séance avec des exercices d'échauffement pour préparer le corps à l'activité physique. Les étirements aideront à améliorer la flexibilité et à prévenir les blessures.
    2. Barre au sol: Travailler les fondamentaux du ballet classique en utilisant la barre au sol pour renforcer les muscles et affiner la technique.
    3. Centre: Déplacer les exercices du barre vers le centre de la salle pour explorer des mouvements plus grands et plus dynamiques, en se concentrant sur l'équilibre, la coordination et la fluidité du mouvement.
    4. Adage et Allegro: Apprendre des séquences chorégraphiées qui mettent l'accent sur la grâce, la fluidité et la précision du mouvement. L'adage met l'accent sur les mouvements lents et contrôlés, tandis que l'allegro est plus rapide et dynamique.
    5. Révérence: Conclure chaque cours avec une révérence, un moment de gratitude et de respect envers l'art de la danse et l'enseignant.

    ## Exigences du Cours
    - Tenue vestimentaire appropriée: Les étudiants doivent porter des vêtements confortables qui permettent le mouvement, ainsi que des chaussures de danse appropriées.
    - Assiduité et engagement: Les étudiants sont encouragés à assister à chaque cours régulièrement et à participer activement aux exercices et aux répétitions.
    - Respect des autres étudiants et de l'enseignant: Un environnement de classe respectueux et collaboratif est essentiel pour favoriser une expérience d'apprentissage positive.

    ## Conclusion
    Le cours de danse classique offre bien plus qu'un simple entraînement physique. C'est une expérience artistique et émotionnelle qui invite les étudiants à explorer leur créativité, leur expression personnelle, et leur connexion avec la musique et le mouvement. En suivant ce cours, les étudiants développeront non seulement leurs compétences en danse, mais aussi leur confiance en eux-mêmes et leur appréciation de l'art de la danse classique.


    # Cours de Ballet Contemporain

    ## Introduction
    Le cours de ballet contemporain est une exploration de la fusion entre les techniques classiques du ballet et les mouvements contemporains. Ce cours offre aux étudiants la possibilité d'expérimenter une variété de styles et de formes de danse, tout en développant leur propre langage corporel et leur expression artistique.

    ## Objectifs
    - Intégrer les techniques classiques du ballet avec des mouvements modernes et contemporains.
    - Explorer la fluidité du mouvement et la liberté d'expression à travers des chorégraphies originales.
    - Développer une sensibilité artistique et une conscience corporelle accrue.
    - Expérimenter
    `;

    // Créer un objet Blob avec le contenu du cours
    const blob = new Blob([coursDeDanse], { type: 'text/plain' });

    // Créer un objet URL à partir du Blob
    const url = window.URL.createObjectURL(blob);

    // Créer un élément <a> pour le téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cours_de_danse.txt';

    // Ajouter l'élément <a> au document
    document.body.appendChild(link);

    // Déclencher le téléchargement
    link.click();

    // Nettoyer l'URL de l'objet Blob
    window.URL.revokeObjectURL(url);

    // Supprimer l'élément <a> du document
    document.body.removeChild(link);
  }
}
