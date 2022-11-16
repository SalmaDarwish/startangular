import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { }

  getMovies(): Observable<any>{
   return this._httpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=58cffe04804dbf26bd1f9f2590bb78e1')

  }
}
