import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  apiUrl = environment.backendServer;

  constructor(private http: HttpClient) { }


  participateCode(codeParticipate: string, email: string) {

    return this.http.get(this.apiUrl + environment.participer +codeParticipate+"&email="+email, {responseType: 'text'})
  }

  historique(email: string) {
    return this.http.get(this.apiUrl + environment.historique +email)
  }
}
