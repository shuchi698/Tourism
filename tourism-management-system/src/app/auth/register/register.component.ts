import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg : any =[];
  avail:boolean;
  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)
  })
  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit() {
  }

  moveToLogin(){
    this._router.navigate(['/auth/login']);
  }

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      this.msg = "Invalid Form Fields";
      this.avail=true;
      console.log(this.msg); return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['auth/login']);},
      error=>{console.error(error);this.msg = error;}
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
