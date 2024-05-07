import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DanceStyle } from 'src/app/_model/dancestyle';
import { DancestyleService } from 'src/app/service/dancestyle.service';

@Component({
  selector: 'app-lookstyle',
  templateUrl: './lookstyle.component.html',
  styleUrls: ['./lookstyle.component.css']
})
export class LookstyleComponent implements OnInit {
  danceStyles: DanceStyle[] = [];

  constructor(
    private danceStyleService: DancestyleService,
    private router: Router // Assurez-vous que le Router est injecté ici
  ) { }

  ngOnInit(): void {
    this.getDanceStyles();
  }

  getDanceStyles(): void {
    this.danceStyleService.getDanceStyles()
      .subscribe(danceStyles => this.danceStyles = danceStyles);
  }

  selectStyle(style: DanceStyle): void {
    // Redirection vers /lookcourse
    this.router.navigateByUrl('/DanceScape/lookcourse');
  }
}
