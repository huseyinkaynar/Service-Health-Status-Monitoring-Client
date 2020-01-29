import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from './services';
import { catchError, map, tap } from 'rxjs/operators';
import { Servicepage } from './servicepage';


@Injectable({
  providedIn: 'root'
})
export class CheckServicesService {
  private url = "http://localhost:8080/services/page";
  private urlPage = 'http://localhost:8080/services/page?page=';



  constructor(private http: HttpClient) { }


  getServices(): Observable<Services[]> {

    return this.http.get<Services[]>(this.url);
  }

  getPageServices(page: number, size: number): Observable<Servicepage> {
    var url = this.urlPage;
    url = url + page + "&size=" + size;
    return this.http.get<Servicepage>(url)
      .pipe(
        map(response => {
          const data = response;
          console.log(data.content);
          return data;
        }));



  }



}
