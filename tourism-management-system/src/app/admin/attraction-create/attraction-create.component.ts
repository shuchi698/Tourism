import { Component, OnInit,NgZone } from '@angular/core';
import { ApiService } from './../../services/api.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-attraction-create',
  templateUrl: './attraction-create.component.html',
  styleUrls: ['./attraction-create.component.css']
})
export class AttractionCreateComponent implements OnInit {
  submitted = false;
  attractionForm: FormGroup;
  AttractionType:any = ['Temple','Cuisine','Beach','Hill Station','National Park']
  t : boolean =true ;
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) { 
      this.mainForm();
    }

    mainForm() {
      this.attractionForm = this.fb.group({
        title: ['', Validators.required],
        description : ['',Validators.required],
        latitude: [''],
        longitude: [''],
        type: ['', Validators.required],
        photo:['',Validators.required]
      })
    }
    updateProfile(e){
      this.attractionForm.get('type').setValue(e, {
        onlySelf: true
      })
      //console.log('E:'+e)
      if(e == 'Cuisine')  
      {
        this.t =false
      }
      else{
        this.t=true;
      }
    }
    onfileselected(event){
      this.attractionForm.get('photo').setValue(event.target.files[0]);
    }
    // Getter to access form control
    get myForm(){
      return this.attractionForm.controls;
    }
  
    onSubmit() {
      this.submitted = true;
      if (!this.attractionForm.valid) {
        return false;
      } else {
        this.apiService.createAttraction(this.attractionForm.value).subscribe(
          (event) => {
            console.log('Attraction successfully created!');
             if(event.type === HttpEventType.UploadProgress){
               console.log(event);
             } 
            this.ngZone.run(() => this.router.navigateByUrl('admin/admin-list'))
          }, (error) => {
            console.log(error);
          });
      }
    }
  ngOnInit() {
  }

}
