import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.css']
})
export class AttractionListComponent implements OnInit {
  Attraction: any = [];
  constructor(private apiservice: ApiService) {
    this.readAttractions();
  }
  //Sorting by type
  sort_by_key(array, key) {
    return array.sort(function (a, b) {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
readAttractions() {
  this.apiservice.getAttractions().subscribe((data) => {
    
    this.Attraction = this.sort_by_key(data,'type');
  })
}
removeAttraction(attraction, index){
  if (window.confirm('Are you sure?')) {
    this.apiservice.deleteAttraction(attraction._id).subscribe((data) => {
      this.Attraction.splice(index, 1);
    })
  }
}
ngOnInit() {
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

}
