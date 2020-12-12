import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signUpForm= new FormGroup({
  email:new FormControl(''),
  name:new FormControl(''),
  password:new FormControl('')
})



  constructor() { }
  
  ngOnInit(): void {
  }
  
  signin(data){
  console.log(this.signUpForm.value)
  console.log(data)
  }
}
