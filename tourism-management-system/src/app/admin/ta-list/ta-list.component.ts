import { Component, OnInit, ViewChild } from '@angular/core';
import { TaService } from '../../services/ta.service';
//declare var $: any;
@Component({
  selector: 'app-ta-list',
  templateUrl: './ta-list.component.html',
  styleUrls: ['./ta-list.component.css']
})
export class TaListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ta: any = [];
  constructor(private taservice: TaService) {
    this.readta();
  }
  readta() {
    this.taservice.getTas().subscribe((data) => {
      this.ta = data;
    })
  }
  removeTa(ta, index) {
    if (window.confirm('Are you sure?')) {
      this.taservice.deleteTa(ta._id).subscribe((data) => {
        this.ta.splice(index, 1);
      }
      )
    }
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
