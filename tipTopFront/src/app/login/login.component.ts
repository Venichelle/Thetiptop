import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../_models/Person';
import { AuthenticateService } from '../_services/authenticate.service';
import { BridgeService } from '../_services/bridge.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  toto = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private router: Router,
    private bridge: BridgeService) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
    });
    
  }

  get f(): {[key: string]: AbstractControl} {
    return this.formLogin.controls;
  }

  register() {
    this.toto = true;
  }

  logIn() {
    this.submitted = true;
    const login = this.formLogin.controls['email'].value;
    const pwd = this.formLogin.controls['password'].value;
    console.log(this.f['password'].errors);
    if(!this.formLogin.invalid) {
      this.authenticateService.login(login, pwd).subscribe({
        next: (resp) => {
          if(resp != null) {
            localStorage.setItem("chaimae",  JSON.stringify(resp));
            this.bridge.isUserLoggedIn.next(true);
            this.bridge.nameUserConnected.next(resp.user)
            if(resp.role === "client") {
              this.router.navigateByUrl("/client");
             } else if (resp.role === "admin") {
               window.location.href = "/admin";
             } else if (resp.role === "huissier") {
               this.router.navigateByUrl("/huissier");
             } else {
               this.router.navigateByUrl("/employe");
             }
          }
        },
        error: (e) => {
          console.log("222222222");
          console.log('MyError ===>', e)
        }
      
      })
  }
  }
}
