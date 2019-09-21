import { Component, OnInit } from '@angular/core';
import { OccupancyService } from '../occupancy.service';

@Component({
  selector: 'app-occupancy-detail',
  templateUrl: './occupancy-detail.component.html',
  styleUrls: ['./occupancy-detail.component.css']
})
export class OccupancyDetailComponent implements OnInit {

  public occupancies : any = [];
  selectedRow : Number;
  setClickedRow : Function;
  name : string;

  constructor(private _occupancyService: OccupancyService) {
    this.setClickedRow = function(index){
      this.selectedRow = index;
    }
   }

  ngOnInit() {
    this._occupancyService.getOccupancyNames()
          .subscribe(data => this.occupancies = data);
  }

  clearSelection() {
    this.selectedRow= null;
  }

  search() {
    if (this.name != "") {
      this.occupancies = this.occupancies.filter(res => {
        return res.OccupancyName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
    else if (this.name == "") {
      this.ngOnInit();
    }
    
    }

}
