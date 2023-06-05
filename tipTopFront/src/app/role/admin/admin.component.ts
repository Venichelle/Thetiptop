import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lots } from 'src/app/_models/Lots';
import { AdminService } from 'src/app/_services/admin.service';
import { BridgeService } from 'src/app/_services/bridge.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  detailsLots = false;
  generateTicket = false;
  allticket = true;
  role = false;
  user = false;
  lots: any;
  formLot!: FormGroup;
  closeResult = '';
  modalTitre = '';
  typeAction = false;



  constructor(private bridgeService: BridgeService,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private modalService: NgbModal,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.formLot = this.formBuilder.group({
      nomLot : new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
      descriptionRole:  new FormControl('' ,[Validators.required, Validators.maxLength(10)])
     });
  }


  showLots() {
    this.detailsLots = true;
    this.bridgeService.sendMessage(false);
    this.allticket = false;
    this.role = false;
    this.user = false;
    this.generateTicket = false;
    
  }

  ajoutOrModifierLot(typeAction: any) {
    if (typeAction === true) {
      console.log('modifer ============> ');
      

    } else {
    const lot: Lots = {nomLot: this.formLot.get("nomLot")?.value, descriptionLot: this.formLot.get("descriptionRole")?.value}
    this.adminService.addRole(lot).subscribe(val => {
      //this.refreshDataLot();
      this.modalService.dismissAll();
      
    })}
    this.refreshDataLot();

  }
  openModalLot(content: any, typeAction: any) {
    if(typeAction === 'modifier') {
      this.modalTitre = 'Modifer un lot';
      this.typeAction = true;
    } else {
      this.modalTitre = 'Ajour un nouveau lot';
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }
  refreshDataLot() {
    const toekn = JSON.parse(localStorage.getItem("chaimae") || '{}').token;
    this.adminService.getAllLots(toekn).subscribe(res => {
      this.lots = res;
      this.changeDetectorRefs.detectChanges();
      console.log('looooooooooooooooooo', this.lots);

    })
  }
  addTicket() {
    this.generateTicket = true;
    this.detailsLots = false;
    this.allticket = false;
    this.role = false;
    this.user = false;
  }

  showAllticket() {
    window.location.reload();
    this.allticket = true;
    this.generateTicket = false;
    this.detailsLots = false;
    this.role = false;
    this.user = false;
  }

  showRole() {
    this.role = true;
    this.allticket = false;
    this.generateTicket = false;
    this.detailsLots = false;
    this.user = false;
  }
  showUser() {
    this.user = true;
    this.role = false;
    this.allticket = false;
    this.generateTicket = false;
    this.detailsLots = false;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deconnexion() {
    localStorage.clear();
    this.bridgeService.isUserLoggedIn.next(false);
    this.router.navigateByUrl("/home");
  }
}
