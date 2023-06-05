import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, zip } from 'rxjs';
import { BridgeService } from '../_services/bridge.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showNousTrouver = false;

  constructor(private bridge: BridgeService) {
    this.bridge.isUserLoggedIn.subscribe(val => {
      this.showNousTrouver = val;
    })
   }

  ngOnInit(): void {
   
  }

}
