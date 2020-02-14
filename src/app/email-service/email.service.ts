import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../email-class/email';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/mail/save";
  }

  public sendmail(email: Email) {
    return this.http.post<Email[]>(this.url, email);
  }
}
