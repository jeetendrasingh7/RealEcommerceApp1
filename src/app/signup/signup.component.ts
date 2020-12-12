import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email;name;
  signin(){
    var obj={
      email:this.email,
      name:this.name
    }
    console.log(obj);
    localStorage.setItem('name',obj.name);
    localStorage.setItem('email',obj.email);
  }
}
