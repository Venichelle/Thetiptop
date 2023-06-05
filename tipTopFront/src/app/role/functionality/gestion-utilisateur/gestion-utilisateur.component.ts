import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AdminService } from 'src/app/_services/admin.service';
import { ModalDismissReasons, NgbAlertConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/_models/Person';
import { roleUser } from 'src/app/_models/roleUser';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}


@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  formUpdatRole! : FormGroup;
  users: any;
  closeResult = '';
  filter = new FormControl('');
  user: any;
  enabled?: boolean;
  person?: Person;
  public isCollapsed = false;
  role?: roleUser;

 
  constructor(pipe: DecimalPipe,
    private adminService: AdminService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    alertConfig: NgbAlertConfig) {
      const token = JSON.parse(localStorage.getItem("chaimae") || '{}').role;
      console.error('test');
      
      this.adminService.getAllusers().subscribe((val) => {
        this.users = val;
        val = this.filter.valueChanges.pipe(
          startWith(''),
          map(text => search(text, pipe))
        );
      })
      alertConfig.type = 'success';
    alertConfig.dismissible = false;
   /* this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );*/
   }
  ngOnInit(): void {
    this.formUpdatRole = this.formBuilder.group({
     
      nom: new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
      prenom: new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
      email: new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
      role: new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
      adresse: new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
      ville: new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
      postale: new FormControl('' ,[Validators.required, Validators.maxLength(10)]),
      
      
    });
  }

  openModal(content: any, user:any) {
    this.user = user;
    this.enabled = true;
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

  changerRole(role: any, content: any) {
    const userRole = {email: role.email, roleName: this.formUpdatRole.get('role')?.value[0]};
    this.adminService.updatRole(userRole).subscribe({
      next: (res: any) => {
        if(res.success) {
          this.role = res
          this.modalService.dismissAll();
          this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        }
      }
    })
  }

  openModalAddUser(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addUser(content: any) {
    this.adminService.addUser(this.formUpdatRole.value).subscribe({
      next: (res: any) => {
        if(res.password != null) {
          this.person = res;
          this.adminService.getAllusers().subscribe((val) => {
            this.users = val;
          });
          this.modalService.dismissAll();
          this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        } 
      }
    })
  }

  affihcerMdp() {
    this.isCollapsed =true;
  }

  supprimerUtilisateur(mai: any) {

    this.adminService.deleteUser(mai).subscribe({
      next: (resp) => {
        this.adminService.getAllusers().subscribe({
          next: (resp) => {
            this.users = resp;
          }
        })
      }
    })
  }

 }
