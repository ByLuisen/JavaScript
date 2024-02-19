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
  value: number = 5;
  pagination!: FormGroup;
  articulos!: Article[];
  p: number = 1;

  constructor(private router: Router, private articles: ArticlesService) {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['/home']);
    }
    this.articulos = this.articles.getArticles();
  }

  ngOnInit(): void {
    this.pagination = new FormGroup({
      elements: new FormControl('', []),
    });
  }

  enviament(): void {}
}
