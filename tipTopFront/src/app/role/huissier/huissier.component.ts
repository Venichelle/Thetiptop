import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/_models/Person';
import { HuissierService } from 'src/app/_services/huissier.service';

@Component({
  selector: 'app-huissier',
  templateUrl: './huissier.component.html',
  styleUrls: ['./huissier.component.css']
})
export class HuissierComponent implements OnInit {
  userWin?: Person;

  constructor(private modalService: NgbModal,
    private huissierService: HuissierService,) { }

  ngOnInit(): void {
  }

  sendCoupons(content: any) {
    this.huissierService.tirage().subscribe((resp: any) => {
      if(resp != null) {
        this.userWin = resp;
        this.modalService.open(content);

      }
    });
    
  }

}
