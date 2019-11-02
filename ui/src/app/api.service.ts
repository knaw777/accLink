import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(userDetails): Observable<any> {
    return this.http.post('http://sampleendpoint/hitme', userDetails);
  }

  loginUser(userDetails): Observable<any> {
    return this.http.post('http://sampleendpoint/hitme', userDetails);
  }

}

