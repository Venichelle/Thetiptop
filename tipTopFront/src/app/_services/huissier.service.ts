import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HuissierService {

  constructor(private http: HttpClient) { }

  tirage() {
    return this.http.get(environment.backendServer + environment.tirage);
  }
}
