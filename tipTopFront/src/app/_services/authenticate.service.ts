import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../_models/Person';
import { Observable } from 'rxjs';
import { RegisterReponse } from '../_models/RegisterReponse';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  apiUrl = environment.backendServer;

  constructor(private http: HttpClient) { }

  login(email: string, motdepasse: string): Observable<any> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json'})
    console.log(header);
    
    return this.http.post(this.apiUrl + environment.login,
     {email, motdepasse}, {headers: header})
    
  }

  sign(person: Person): Observable<any> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json'})
    return this.http.post(this.apiUrl + environment.enregistrer,
     person, {headers: header})
    
  }
}
