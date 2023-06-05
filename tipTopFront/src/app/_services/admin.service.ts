import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Lots } from '../_models/Lots';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl = environment.backendServer;
  token = JSON.parse(localStorage.getItem("chaimae") || '{}').token;
  constructor(private http: HttpClient) { 
  }

  genereateTicket() {
    return this.http.post(this.apiUrl + environment.genereateTicket, null, { responseType: 'text'});
  }

  getAllLots(token: string) {
    const tokenInHeader = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return this.http.get(this.apiUrl + environment.getLots, tokenInHeader)
  }

  deleteLot(token: any, idLot: any) {
    const tokenInHeader = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return this.http.delete(this.apiUrl + environment.getLots +"/"+idLot, tokenInHeader)
  }

  getAllTicketStistique(token: any) {
    const tokenInHeader = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return this.http.get(this.apiUrl + environment.statistiqueTicket, tokenInHeader)
  }

  getAllusers() {
    return this.http.get(this.apiUrl + environment.clients);
  }

  addRole(lot: Lots) {
    const tokenInHeader = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
    return this.http.post(this.apiUrl + environment.getLots, lot, tokenInHeader)
  }

  addUser(user: any) {
    const tokenInHeader = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
    console.log(this.apiUrl + environment.ajoutUtilsateur)
    return this.http.post(this.apiUrl + environment.ajoutUtilsateur, user, tokenInHeader);
  }

  updatRole(userRole: any) {
    const tokenInHeader = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
    return this.http.post(this.apiUrl + environment.modificationRole +userRole.email +"&roleName="+userRole.roleName, null, tokenInHeader);
  }

  deleteUser(email: any) {
    const tokenInHeader = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
    return this.http.delete(this.apiUrl + environment.supprimerClient+email, {responseType: 'text'})
  }

}
