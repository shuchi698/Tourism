import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg : any = []
  avail:boolean;
  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });
  constructor(private _router:Router, private _user:UserService) { }

  ngOnInit() {
  }

  moveToRegister(){
    this._router.navigate(['/auth/register']);
  }

  login(){
    if(!this.loginForm.valid){
      this.msg = "Invalid Email or password";
      console.log(this.msg);return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{
        console.log(data);
        if(data['message']=='Login Success')
        {
          this._router.navigate(['/auth/userhome']);
        } 
         else{
                this.msg=data['message']
                this.avail=true;
         }} ,
      error=>console.error(error)
    )
  }

}
