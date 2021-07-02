import {Component} from '@angular/core';
import {ArticleModel} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: ArticleModel[];

  constructor() {
    this.articles = [
      new ArticleModel('Angular', 'https://angular.io', 3),
      new ArticleModel('Fullstack', 'https://fullstack.io', 2),
      new ArticleModel('Angular Homepage', 'https://angular.io', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new ArticleModel(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortArticles(): ArticleModel[] {
    return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes);
  }
}
