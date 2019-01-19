import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../userdetail';
import {RegistrationService} from '../registration.service';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  SigninForm: FormGroup;
  constructor(private socialAuthService:AuthService, private formbuilder:FormBuilder, private router:Router, private rs:RegistrationService) { }
  userlist:User[];
  user:User;
  i = 0 ;
  foo = false ;

  ngOnInit() {
  	this.SigninForm = this.formbuilder.group(
  	{	email: ['',Validators.required],
  		password: ['', Validators.required]
  	});
  }
  
  SocialSignIn(socialPlatform: string){

    if(socialPlatform == "google"){
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        (userData) => {
          console.log(userData);
        }
      )
    }
    /*if(socialPlatform == "facebook"){
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
        (userData) => {
          console.log("signIndata", userData);
        }
      )
    }*/
  }
  onSignin(){
    this.user=JSON.parse(JSON.stringify(this.SigninForm.value));
    console.log(this.user);    
    this.rs.getusers().subscribe(
      data=> {this.userlist=data, this.checkuser()});
  }
  checkuser(){
    for ( this.i = 0; this.i < this.userlist.length; this.i++){
      if(this.user.email == this.userlist[this.i].email){
        this.foo = true;
        if(this.user.password == this.userlist[this.i].password){
          this.router.navigate(['work']);
        }
        else{
          alert('Wrong Password');
        }
        break;
      }    
    }
    if(this.foo== false){
      alert('User does not exist');
    }
  }
  onSignup(){
  	this.router.navigate(['signup']);
  }
}