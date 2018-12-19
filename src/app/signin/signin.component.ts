import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService) { }
  
  public signinForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
   
  }); 
  

  signin(formData: FormData){
    this.authService.signIn(formData["email"], formData["password"]);
  }

  ngOnInit() {
  }

}
