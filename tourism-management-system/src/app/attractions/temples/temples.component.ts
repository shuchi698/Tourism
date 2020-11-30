import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';

declare var $: any;
@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css']
})
export class TemplesComponent implements OnInit {
  modalRef: BsModalRef;
  desc:any;
  ctitle:any;
  temples:any=[];

  constructor(private modalService: BsModalService,private api:ApiService) {
    this.getTemples();
  }
 getTemples()
 {
          this.api.getAType('Temple').subscribe((data)=>{
                console.log('In ts temple value:'+data);
                this.temples=data;
              
          })
 }
  openModal(template: TemplateRef<any>,i:any) {
    this.desc=this.temples[i].description;
    this.ctitle=this.temples[i].title;
    this.modalRef = this.modalService.show(template);
  }
  transform(attr)
{
  console.log(attr);
  let url = attr.photo;
  let arr = url.split('\\');
  let img = 'assets/attractions/' + arr[9];
  console.log(img);
  return img;
}

  ngOnInit() {
    $(document).ready(function(){
      $('.tabs').tabs();
      $('.slider').slider({
        indicators : false,
        height : 575,
        interval : 2500
    });
      
    });
   
    //
    
    
  }

}
