import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Serie } from './serie';


@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(){
    return this.http.get<Serie[]>(this.apiUrl);
  }




}
