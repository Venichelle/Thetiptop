import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoriqueReponse } from 'src/app/_models/HistoriqueReponse';
import { ClientServiceService } from 'src/app/_services/client-service.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  formparticipate! : FormGroup;
  historiqueGains?: any;
  modalTitle?: string;
  modalBody?: string;
  modalButton?: string;


  constructor(private formBuilder: FormBuilder,
    private clientService: ClientServiceService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    const emailFromSession =  JSON.parse(localStorage.getItem("chaimae") || '{}')
    this.formparticipate = this.formBuilder.group({
      code : new FormControl('' ,[Validators.required, Validators.maxLength(10)] 
    )});

    this.clientService.historique(emailFromSession.user).subscribe({
      
      next: (resp) => {
        if(resp != null) {
          this.historiqueGains = resp;
        }
      }
    })
  }

  participate(content: any) {
   const code = this.formparticipate.controls["code"].value
   // get email from local storage
   const emailFromSession =  JSON.parse(localStorage.getItem("chaimae") || '{}')
   // get email
   const email = emailFromSession.user
   this.clientService.participateCode(code, email).subscribe( {
     next:(val) => {
      if(val === "code invalide") {
        this.modalBody = "Le code coupon saisi est invalide !!";
        this.modalTitle = "Opss !!!";
        this.modalService.open(content);

      } else {
        this.modalTitle = "Bravo, vous avez gagné";
        this.modalBody = "Félicitations vous avez gagné un lot de thé";
        this.modalService.open(content);
      }

     },
     error:(err) => {
      if (err.status === 400) {
        console.log("33333", err);
        this.modalBody = "Le code coupon saisi est invalide !!";
        this.modalTitle = "Opss !!!";
        
        this.modalService.open(content);
      }
     }
   })
  }
}
