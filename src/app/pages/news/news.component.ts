import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ArticleModel } from '../../Models/Article.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 //si se tiene que 'inyectar' es en el constructor, adentro de los ()
  constructor(private newsService: NewsService) { }
  public articles: ArticleModel[]=[];

  ngOnInit(): void {
    this.newsService.getNews().subscribe((response: any) => {
      console.log(response.articles);
      this.articles = response.articles; 
    });
  }

}
