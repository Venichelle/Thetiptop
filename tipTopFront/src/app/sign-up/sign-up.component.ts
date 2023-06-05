import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../validation';
import { Person } from '../_models/Person';
import { AuthenticateService } from '../_services/authenticate.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formLogin!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    
    },
    {validators: [Validation.match('password', 'confirmPassword')]});
  }

  get f(): {[key: string]: AbstractControl} {
    return this.formLogin.controls;
  }

  signUp() {
    this.submitted = true;
    let prenom = this.formLogin.controls['prenom'].value;
    let person: Person = {prenom , nom:  this.formLogin.controls['nom'].value,
    email: this.formLogin.controls['email'].value, password: this.formLogin.controls['password'].value}
    if(!this.formLogin.invalid) {
    this.authService.sign(person).subscribe({
      next: (resp) => {
      if(resp.succeeded) {
        console.log(resp);
        this.router.navigateByUrl("/login")
      }
      }}
    )
  }
  }
}