import { Component, OnInit,TemplateRef,NgZone } from '@angular/core';
import {QueryService} from '../../services/query.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  avail:boolean=false;
  constructor(private _user:UserService, private _router:Router,private ngZone:NgZone) { 
    this._user.user()
    .subscribe(
      data=>{this.addName(data),
      this.avail=true;
      }
      
    )
    if(this.username == null)
    {
      this.avail=false;
    }
  }
  image="assets/images/st.png";
  image1="assets/images/lioness.jpg";

  
  ngOnInit() {

    $(document).ready(()=>{
      
      let current="div1";
      let fadcurrent="first";
        $("#one").click(()=>{
            fadding('first');
                 });
        $("#two").click(()=>{
          fadding('second');
         });
         $("#three").click(()=>{
          fadding('third');
         });
         $("#four").click(()=>{
          fadding('fourth');
         });
         $("#five").click(()=>{
          fadding('fifth');
         });

        function fadding(k:string)
        {
            $("#"+fadcurrent).fadeOut("fast",()=>{
              $("#"+k).fadeIn("slow");
              fadcurrent=k;
            })
        }

        
      $("#first1").click(()=>{
      
        task(1);
      })

      $("#second1").click(()=>{
        task(2);
      })
      $("#third1").click(()=>
      {
        task(3);
      })

      function task(x:number)
      {
        let temp=this;
        $("#"+current).slideUp("slow",()=>{
          $("#div"+x).slideDown("slow");
          current="div"+x;   
        }); 
      }
   
      
      $('.sidenav').sidenav();
      $('.collapsible').collapsible();
      $('.parallax').parallax();
      $('.slider').slider({
        indicators : false,
        height : 595,
        interval : 2500
    });
    });
  }
///
username:String='';
addName(data){
  this.username = data.username;
}
logout(){
  console.log('Reached at Logout..')
  this._user.logout()
  .subscribe(
    data=>{console.log(data);
      this.ngZone.run(() => this._router.navigateByUrl('auth/login'))
    },
    error=>console.error(error)
  )
}




}
