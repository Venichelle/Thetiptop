import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from './_models/Person';
import { BridgeService } from './_services/bridge.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  env = environment;
  title = 'tipTopFront';
  connecterAdmin?: boolean = true;

   constructor(private bride: BridgeService,
    private meta: Meta,
    private titleService: Title
    ) {
    
  }

  ngOnInit(): void {
    
    const userInLocalStorage: Person = JSON.parse(localStorage.getItem("chaimae") || '{}');
    
    if (Object.keys(userInLocalStorage).length > 0) {
      this.bride.isUserLoggedIn.next(true);
    
      this.bride.nameUserConnected.next(userInLocalStorage.nom || "");
      if(userInLocalStorage.role === 'admin') {
        this.connecterAdmin = false;
      }
    } 

    this.titleService.setTitle('ThéTipTop- Boutique de Thés à moindre coût');
    this.meta.addTag({
      name: 'Thétiptop',
      content: 'Thé de qualité à moindre coût? Découvrez les thés de qualité de la marque ThéTipTop : thé noir, thé vert, thé blanc, infusions...'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Vous aimez boire du thé ? ' +
          ' Découvrez les thés de qualité de la marque Thé Tip Top : thé noir, thé vert, thé blanc, infusions...'
      });

    
      this.meta.updateTag({ name: 'url', content:  'https://dev.dsp-archiweb020-vm.fr' });
      this.meta.updateTag({ property: 'og:Title', content: 'ThéTipTop- Boutique de Thés à moindre coût' });
      this.meta.updateTag({ property: 'og:description', content:' Vous aimez boire du thé ? Découvrez les thés de qualité de la marque ThéTipTop : thé noir, thé vert, thé blanc, infusions...' });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:site_name', content: 'https://dev.dsp-archiweb020-vm.fr '});

  }




}
