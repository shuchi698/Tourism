import { Component, OnInit } from '@angular/core';
import { TaService } from '../../services/ta.service'
import {Router,ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-ta-edit',
  templateUrl: './ta-edit.component.html',
  styleUrls: ['./ta-edit.component.css']
})
export class TaEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  taDrop: any = ['Travel-Agent', 'Tour-Guide']
  constructor( public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: TaService,
    private router: Router) { }

  ngOnInit() {
    this.updateTa();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTa(id);
  }
  updateProfile(e) {
    this.editForm.get('t_role').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getTa(id) {
    this.apiService.getTa(id).subscribe(data => {
      this.editForm.setValue({
        t_name : data.t_name,
        t_email : data.t_email,
        t_phone : data.t_phone,
        t_address : data.t_address,
        t_city : data.t_city,
        t_role:data.t_role
      });
    });
  }
  updateTa() {
    this.editForm = this.fb.group({
      t_name: ['', Validators.required],
      t_email: ['', Validators.required],
      t_phone: ['', Validators.required],
      t_address: ['', Validators.required],
      t_city: ['', Validators.required],
      t_role: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateTa(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('admin/ta-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
