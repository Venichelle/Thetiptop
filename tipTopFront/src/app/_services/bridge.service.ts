import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  private subject = new Subject<boolean>();

  constructor() { }

   sendMessage(message: any) {
    this.subject.next(message);
  }

  getMessage() {
    return this.subject.asObservable();
  }

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public nameUserConnected: BehaviorSubject<string> = new BehaviorSubject<any>("")
}
