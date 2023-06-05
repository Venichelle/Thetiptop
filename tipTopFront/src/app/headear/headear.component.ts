import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BridgeService } from '../_services/bridge.service';

@Component({
  selector: 'app-headear',
  templateUrl: './headear.component.html',
  styleUrls: ['./headear.component.css']
})
export class HeadearComponent implements OnInit {
  userName?: any;
  isConnected?: boolean;

  constructor(private bridgeService: BridgeService,
    private router: Router,
    private metaService:Meta) { 
      this.bridgeService.isUserLoggedIn.subscribe(val => {
        this.isConnected = val;
      })
      this.bridgeService.nameUserConnected.subscribe({
        next: (val) => {
          this.userName = val
        }
      })
    }

  ngOnInit(): void {
    //this.metaService.addTag( { name:'description',content:"Thé de qualité à moindre coût? Vous adorez le thé? Nous vous proposons des gammes de thé et infusions au meilleur prix. Découvrez les thés de qualité de la marque ThéTipTop : thé noir, thé vert, thé blanc, infusions..."});
  }

  deconnexion() {
    localStorage.clear();
    this.bridgeService.isUserLoggedIn.next(false);
    this.router.navigateByUrl("/home");
  }
}
