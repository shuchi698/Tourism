import { Component, OnInit } from '@angular/core';
import { TaService } from '../../services/ta.service';
import {UserService} from '../../services/user.service';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-find-agent',
  templateUrl: './find-agent.component.html',
  styleUrls: ['./find-agent.component.css']
})

export class FindAgentComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ta: any = [];
  username:String='';
  constructor(private taservice: TaService,private _user:UserService, private _router:Router) { 
    
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/auth/login'])
    )
    if(this.username == null)
    {
      this._router.navigate(['/auth/login'])
    }
    this.readta();

  }
  addName(data){
    this.username = data.username;
  }
  readta() {
    this.taservice.getTas().subscribe((data) => {
      this.ta = data;
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
