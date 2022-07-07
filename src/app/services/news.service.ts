import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //url = environment.urlNewsApi;
  url="https://newsapi.org";
  constructor(private http:HttpClient) { }

  getNews(){
    const query ={
      q: "tesla",
      from: "2022-05-30",
      sortBy: "publishedAt",
      apiKey: "ddfa111e9df3485baad24f2b6ea51498"

    }
    //this.url + '/v2/everything'
    return this.http.get(`${this.url}/v2/everything`, {params:query});
  }
  
}
