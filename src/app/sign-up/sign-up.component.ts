import { Component, OnInit } from '@angular/core';
import {User} from '../userdetail';
import {FormGroup,FormBuilder, ReactiveFormsModule, Validator} from '@angular/forms';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	userdetail:FormGroup = this.fb.group({
		firstname:[''],
		lastname:[''],
		email:[''],
		password:['']
	})
	user:User;
  constructor( private fb:FormBuilder, private rs:RegistrationService) { }
  ngOnInit() {
  }
  onSubmit() {
    this.user = JSON.parse(JSON.stringify(this.userdetail.value));
    this.rs.adduser(this.user).subscribe();
  }
}
