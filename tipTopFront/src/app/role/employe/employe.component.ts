import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CouponReponse } from 'src/app/_models/CouponReponse';
import { EmployeService } from 'src/app/_services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  formpEmploye! : FormGroup;
  coupon?: CouponReponse;

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private employeService: EmployeService) { }

  ngOnInit(): void {
    this.formpEmploye = this.formBuilder.group({
      codeCoupon : new FormControl('' ,[Validators.required, Validators.maxLength(10)] 
    )});
  };

  sendCoupons(content: any) {
    this.employeService.checkGain(this.formpEmploye.value.codeCoupon).subscribe((resp: any) => {
      if (resp.lotNom !=null) {
        this.coupon = resp;
        this.modalService.open(content);
      }
    });
  }

  recupererLot(content: any) {
    this.modalService.dismissAll();
    this.employeService.recuperGain(this.formpEmploye.value.codeCoupon).subscribe((val) => {
      if(val != null) {
        this.modalService.open(content);
      }

    })

  }

}
