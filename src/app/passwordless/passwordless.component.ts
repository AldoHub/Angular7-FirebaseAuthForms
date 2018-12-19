import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormGroup, FormControl, Validators } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-passwordless',
  templateUrl: './passwordless.component.html',
  styleUrls: ['./passwordless.component.css']
})
export class PasswordlessComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  public loginForm = new FormGroup({
    email: new FormControl('',  Validators.required),
   
  });  

  login(formData: FormData){
    this.authService.sendEmailLink(formData["email"]);
  }


  ngOnInit() {
    const url = this.router.url;
    this.authService.confirmSignIn(url);
  }

}
