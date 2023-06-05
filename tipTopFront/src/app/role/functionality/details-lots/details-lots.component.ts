import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lots } from 'src/app/_models/Lots';
import { AdminService } from 'src/app/_services/admin.service';


@Component({
  selector: 'app-details-lots',
  templateUrl: './details-lots.component.html',
  styleUrls: ['./details-lots.component.css']
})
export class DetailsLotsComponent implements OnInit {
  lots: any;
  formLot!: FormGroup;
  closeResult = '';
  modalTitre = '';
  typeAction = false;

  constructor(private adminService: AdminService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }
 
    ngOnInit(): void {
      const toekn = JSON.parse(localStorage.getItem("chaimae") || '{}').token;
      this.adminService.getAllLots(toekn).subscribe(res => {
        this.lots = res;
  
  
      })
      this.formLot = this.formBuilder.group({
        nomLot : new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
        descriptionRole:  new FormControl('' ,[Validators.required, Validators.maxLength(10)])
       });
    }



  refreshDataLot() {
    const toekn = JSON.parse(localStorage.getItem("chaimae") || '{}').token;
    this.adminService.getAllLots(toekn).subscribe(res => {
      this.lots = res;

    })
  }

  deleteLot(id: any) {
    console.log(id)
    const toekn = JSON.parse(localStorage.getItem("chaimae") || '{}').token;
    this.adminService.deleteLot(toekn, id).subscribe(val => {
      this.refreshDataLot();
    }) 

  }

  ajoutOrModifierLot(typeAction: any) {
    if (typeAction === true) {
      console.log('modifer ============> ');
      

    } else {
    const lot: Lots = {nomLot: this.formLot.get("nomLot")?.value, descriptionLot: this.formLot.get("descriptionRole")?.value}
    this.adminService.addRole(lot).subscribe(val => {
      this.refreshDataLot();
      this.modalService.dismissAll();
      
    })}
  }

  updatLot() {

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
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
