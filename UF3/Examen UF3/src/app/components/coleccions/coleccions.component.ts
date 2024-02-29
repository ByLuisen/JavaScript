import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { User } from 'src/app/model/User';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-coleccions',
  templateUrl: './coleccions.component.html',
  styleUrls: ['./coleccions.component.css'],
})
export class ColeccionsComponent {
  itemsPerPage: number = 5;
  filterByName: string = '';
  articulos: Article[];
  filteredArticulos: Article[];
  p: number = 1;

  constructor(private articles: ArticlesService) {
    this.articulos = this.articles.getArticles();
    this.filteredArticulos = this.articulos;
  }

  onItemsPerPageChange(): void {
    this.p = 1;
  }

  onFilterByNameChange(): void {
    this.p = 1;
    this.updateFilteredArticulos();
  }

  updateFilteredArticulos(): void {
    if (this.filterByName != ''){
    this.filteredArticulos = this.articulos
      .filter(item => item.nom.toLowerCase().includes(this.filterByName.toLowerCase()));
    }
    else {
      this.filteredArticulos = this.articulos;
    }
  }
}
