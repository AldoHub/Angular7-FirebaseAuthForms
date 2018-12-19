import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {map} from "rxjs/operators";
import { auth } from 'firebase';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  error: string;
  emailSent = false;

  //user instance
  user = this.afAuth.authState.pipe(
    map(authState =>{
      if(!authState){
        return null;
      }else{
        return authState.email
      }
    })
  );

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  
  //create the account
  logIn(email:string, password:string){

     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user)=>{
        // email verification
        this.afAuth.user.subscribe( x => {
          if(x){
            x.sendEmailVerification()
            .then(()=>{
              console.log("Email verification sent");
            })
            .catch(err => {
              console.log("Error: ", err);
            })
          
          }
        })


        console.log(user.user.email)
        this.error = "";
        this.router.navigate(["/private"]);
      })
      .catch((err)=>{

         console.log("An error ocurred");
       this.error = err.message;
      })
  }


  //logout function
  logOut(){
    this.afAuth.auth.signOut()
    .then(()=>{
      console.log("user signed Out successfully");
      this.router.navigate(["/"]);
    }).catch((err) => {
      console.log(err);
    })
  }


  //sign in with email and password
  signIn(email:string, password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user)=>{
      console.log(user.user.email);
      this.error = "";
      this.router.navigate(["/private"]);
    })
    .catch((err)=>{
      console.log("An error ocurred");
      this.error = err.message;
    })
  }

  //google sign in
  signInWithProvider(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(()=>{
      this.router.navigate(["/private"]);
    });

  }

  //sends the email to verify the user
  async sendEmailLink(email: string){
    const actionCodeSettings = {
      url: "http://localhost:4200/passwordless",
      handleCodeInApp: true
    };

    try{
      await this.afAuth.auth.sendSignInLinkToEmail(
        email,
        actionCodeSettings
      );
        console.log("Sent Email verification")
       //set the email in localStorage
       window.localStorage.setItem('signInEmail', email);
        this.emailSent = true;
    }catch(err){
        this.error = err.message;
    }

  }

  async confirmSignIn(url: string) {
    try{
      if(this.afAuth.auth.isSignInWithEmailLink(url)){
        let email = window.localStorage.getItem("signInEmail");

        if(!email){
          email = window.prompt("Confirm Your Email Please");
        }
        const result = await this.afAuth.auth.signInWithEmailLink(email, url);
        if(result){
          this.router.navigate(["/private"]);
          //clean localStorage
          window.localStorage.removeItem("signInEmail");
        } else{
          console.log("an error ocurred");
        }


      }
    }catch(err){
       this.error = err.message;
    }
  }


}
