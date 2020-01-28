import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from './services';


@Injectable({
  providedIn: 'root'
})
export class CheckServicesService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/services"
  }
  getServices(page: number) {
    return this.http.get<Services[]>(this.url + '/page');
  }




}
