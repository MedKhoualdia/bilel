import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DanceCategory } from 'src/app/_model/dancecategory';
import { DanceCategoryService } from 'src/app/service/dancecategory.service';

@Component({
  selector: 'app-lookcategory',
  templateUrl: './lookcategory.component.html',
  styleUrls: ['./lookcategory.component.css']
})
export class LookcategoryComponent implements OnInit {
  categories: DanceCategory[] = [];

  constructor(
    private danceCategoryService: DanceCategoryService,
    private router: Router // Assurez-vous que le Router est injecté ici
  ) { }

  ngOnInit(): void {
    this.getDanceCategories();
  }

  getDanceCategories(): void {
    this.danceCategoryService.getDanceCategories()
      .subscribe(categories => this.categories = categories);
  }

  selectCategory(category: DanceCategory): void {
    // Redirection vers /lookstyle
    this.router.navigateByUrl('/DanceScape/lookstyle');
  }
}
