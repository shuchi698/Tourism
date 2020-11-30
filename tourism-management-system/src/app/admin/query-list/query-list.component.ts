import { Component, OnInit } from '@angular/core';
import {QueryService} from '../../services/query.service';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  q:any=[];
  constructor(private queryService:QueryService) {
    this.readquery();
   }
   readquery() {
    this.queryService.getQueries().subscribe((data) => {
      this.q = data;
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
