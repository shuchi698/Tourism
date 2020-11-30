import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import {Router,ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-attraction-edit',
  templateUrl: './attraction-edit.component.html',
  styleUrls: ['./attraction-edit.component.css']
})
export class AttractionEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  attractionData : any = [];
  AttractionType:any = ['Temple','Cuisine','Beach','Hill Station','National Park']
  flag : boolean = true;
  constructor( public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.updateAttraction();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAttraction(id);
    // this.editForm = this.fb.group({
    //   title: ['', Validators.required],
    //     description : ['',Validators.required],
    //     latitude: ['',Validators.required],
    //     longitude: ['',Validators.required],
    //     type: ['', Validators.required],
    //     photo:['',Validators.required]
    // })
  }
  //FIle Operation
  onfileselected(event){
    this.editForm.get('photo').setValue(event.target.files[0]);
  }
  updateProfile(e) {
    this.editForm.get('type').setValue(e, {
      onlySelf: true
    })
    if(e == 'Cuisine')
    {
      this.flag = false
    }
    else
    {
      this.flag = true
    }
  }
  
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getAttraction(id) {
    this.apiService.getAttraction(id).subscribe(data => {
      this.editForm.setValue({
        title : data.title,
        description : data.description,
        latitude : data.latitude,
        longitude : data.longitude,
        type : data.type,
        photo:data.photo
      });
      if(data.type=='Cuisine')
      {
          this.flag=false;
      }
    });

    
  }
  updateAttraction() {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      description : ['',Validators.required],
      latitude: [''],
      longitude: [''],
      type: ['', Validators.required],
      photo:['',Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateAttraction(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('admin/admin-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
