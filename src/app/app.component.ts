import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './newsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mArticles: Array<string>;
  mSources: Array<string>;

  constructor(private newsapi: NewsApiService) {
    console.log('App Component Constructor called');
  }
  ngOnInit(){
    //load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }
  searchArticles(source) {
    console.log("Selected source is: " + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
