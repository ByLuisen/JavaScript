import { Injectable } from '@angular/core';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articles: Article[] = [];

  constructor() {
    this.initArticles();
  }

  initArticles(): void {
    for (let i = 0; i < 101; i++) {
      this.articles.push(new Article('Articulo ' + i, 'Descripcion ' + i, i));
    }
  }

  getArticles(): Article[] {
    return this.articles;
  }
}
