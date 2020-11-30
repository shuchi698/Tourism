import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;
@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {

  modalRef: BsModalRef;
  desc: any;
  ctitle: any;
  cuisines: any = [];
  constructor(private modalService: BsModalService, private api: ApiService) {
    this.getCuisines();
  }
  getCuisines() {
    this.api.getAType('Cuisine').subscribe((data) => {
      console.log('In ts CUISINE value:' + data);
      this.cuisines = data;

    })
  }
  openModal(template: TemplateRef<any>, i: any) {
    this.desc = this.cuisines[i].description;
    this.ctitle = this.cuisines[i].title;
    this.modalRef = this.modalService.show(template);
  }
  transform(attr) {
    console.log(attr);
    let url = attr.photo;
    let arr = url.split('\\');
    let img = 'assets/attractions/' + arr[9];
    console.log(img);
    return img;
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.tabs').tabs();
     /* $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
      setInterval(function() {
        $('.carousel.carousel-slider').carousel('next');
      }, 2000);*/
      $('.slider').slider({
          indicators : false,
          height : 575,
          interval : 2500
      });
    });

  }

}
