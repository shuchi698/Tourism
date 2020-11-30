import { Component, OnInit, NgZone } from '@angular/core';
import { TaService } from './../../services/ta.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-ta-create',
  templateUrl: './ta-create.component.html',
  styleUrls: ['./ta-create.component.css']
})
export class TaCreateComponent implements OnInit {
  submitted = false;
  taForm: FormGroup;
  taDrop: any = ['Travel-Agency', 'Tour-Guide']
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private taService: TaService) {
    this.mainForm();
  }


  mainForm() {
    this.taForm = this.fb.group({
      t_name: ['', Validators.required],
      t_email: ['', Validators.required],
      t_phone: ['', Validators.required],
      t_address: ['', Validators.required],
      t_city: ['', Validators.required],
      t_role: ['', Validators.required]
    })
  }
  get myForm() {
    return this.taForm.controls;
  }
  updateProfile(e){
    this.taForm.get('t_role').setValue(e, {
      onlySelf: true
    })
  }
  onSubmit() {
    this.submitted = true;
    if (!this.taForm.valid) {
      return false;
    } else {
      this.taService.createTa(this.taForm.value).subscribe(
        (res) => {
          console.log('Agent successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('admin/ta-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }
  ngOnInit() {

  }
}
