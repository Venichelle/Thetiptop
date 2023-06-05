import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../_models/Contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  myForm!: FormGroup;


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,
         Validators.email]),
      mobile: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(10)
      ]),
      message: new FormControl('',Validators.required)
    });
    
  }

  send() {
    if(this.myForm.valid) {
      // let contact = new Contact();
    } else {
        alert('erriiir')
    }
  }

}
