import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { environment } from '.../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  }
  loadThemeById(id:string): Observable<ITheme> {
    return this.http.get<ITheme>(`${apiUrl}/themes/${id}`);
  }
  // createTheme(id:string): Observable<ITheme> {
  //   return this.http.post<ITheme>(`${apiUrl}/themes`);
  // }

}
