import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  errorData: {};

  constructor(private http: HttpClient) { }

  sendmail (member:Member): Observable<any> {
    let sendmailUrl =" http://localhost:8080" + '/sendSimpleEmail';
    let request = this.http.post(sendmailUrl, member)
    return request;
  };
}
