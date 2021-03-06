import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicepage } from '../servicepage-class/servicepage';


@Injectable({
  providedIn: 'root'
})
export class CheckServicesService {
  private url = "http://localhost:8080/services/";
  private searchUrl = "http://localhost:8080/services/search?name="



  constructor(private http: HttpClient) { }


  getServices(): Observable<Servicepage> {
    var url = this.url;


    return this.http.get<Servicepage>(url);

  }

  getPageServices(page: number, size: number): Observable<Servicepage> {
    var url = this.url;
    url = url + "?page=" + page + "&size=" + size;
    return this.http.get<Servicepage>(url);

  }
  getSearchPage(search: String, page: number, size: number): Observable<Servicepage> {
    var url = this.searchUrl;
    url = url + search + "&page=" + page + "&size=" + size;

    return this.http.get<Servicepage>(url);
  }



}
