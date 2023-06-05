import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  apiUrl = environment.backendServer;

  constructor(private http: HttpClient) { }

  checkGain(codeCoupon: any) {
    return this.http.post(this.apiUrl + environment.verifierGain +codeCoupon, null);
  }

  recuperGain(codeCoupon: any) {
    return this.http.post(this.apiUrl + environment.recuperGain +codeCoupon, null, {responseType: 'text'});
  }
}
