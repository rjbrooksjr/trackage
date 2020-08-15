import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpForm } from './common/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  sendHelp(data: HelpForm): Observable<void> {
    return this.http.post<void>('https://trackage.app/contact', data);
  }
}
