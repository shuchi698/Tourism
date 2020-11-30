import { Component, OnInit,NgZone } from '@angular/core';
import {QueryService} from '../../services/query.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  submitted = false;
  queryForm: FormGroup;
  cat:any = ['Tourist Enquiry', 'Investors', 'Commercial Activity', 'Feedback', 'Others']
  flag : boolean = false;
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private queryService: QueryService) {
    this.mainForm();
   }
   mainForm() {
    this.queryForm = this.fb.group({
      q_name: ['', [Validators.required]],
      q_email: ['', [Validators.required]],
      q_cat: ['', [Validators.required]],
      q_msg : ['',[Validators.required]],
      q_phone: ['', [Validators.required]]
    })
  }
  updateProfile(e){
    this.queryForm.get('cat').setValue(e, {
      onlySelf: true
    })
  }
  get myForm(){
    return this.queryForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if(window.confirm('Are you sure?Once its send can not modified')){
    if (!this.queryForm.valid) {
      return false;
    } else {
      this.queryService.createQuery(this.queryForm.value).subscribe(
        (res) => {
          console.log('Query successfully Transmitted!');
          this.flag = true;
          this.ngZone.run(() => this.router.navigateByUrl('query'))
          //this.ngZone.run(this.router.navigateByUrl('/'));
        }, (error) => {
          console.log(error);
        });
    }
  }
}
  ngOnInit() {
  }

}
