import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {newsModels} from '../models/news.models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl = environment.UrlApiNoticias;
  constructor(private httpClient: HttpClient) { }

  getNoticias(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  deleteNoticia(id: string): Observable<any>{
    return this.httpClient.delete(this.baseUrl + id);
  }

  savenoticia(noticia: newsModels): Observable<any>{
    return this.httpClient.post(this.baseUrl, noticia);
  }

  getNoticia(id: string): Observable<any>{
    return this.httpClient.get(this.baseUrl + id);
  }

  putNoticia(id: string, noticia: newsModels): Observable<any>{
    return this.httpClient.put(this.baseUrl + id, noticia);
  }
}