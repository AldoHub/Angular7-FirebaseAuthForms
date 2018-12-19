import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-authprovider',
  templateUrl: './authprovider.component.html',
  styleUrls: ['./authprovider.component.css']
})
export class AuthproviderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signin(formData: FormData){
    this.authService.signInWithProvider();
    
  }

}
