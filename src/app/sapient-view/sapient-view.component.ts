import { Component, OnInit } from '@angular/core';
import { SapientViewService } from './sapient-view.service';

@Component({
  selector: 'app-sapient-view',
  templateUrl: './sapient-view.component.html',
  styleUrls: ['./sapient-view.component.css']
})
export class SapientViewComponent implements OnInit {

  constructor(
    private spaceXdataService: SapientViewService
  ) { }
  launchYearArr = [];
  launchYear = '';
  launchSuccess: boolean = null;
  landSuccess: boolean = null;
  spaceXdata = [];
  isLoading = false;
  ngOnInit(): void {
    this.getSpaceXdata();
  }
  getSpaceXdata() {
    this.spaceXdataService
      .getSpaceXdata()
      .subscribe(res => {
        this.spaceXdata = res;
        this.launchYearArr = [...new Set(res.map(el => el.launch_year))];
      });
  }
  getFilteredData() {
    this.isLoading = true;
    this.spaceXdataService
      .getSpaceXdata(this.launchYear, this.launchSuccess, this.landSuccess)
      .subscribe(res => {
        this.spaceXdata = res;
        this.isLoading = false;
      });

  }
  setLandingTrue() {
    if (this.landSuccess === false || this.landSuccess === null) {
      this.landSuccess = true;
    } else {
      this.landSuccess = null;
    }
    this.getFilteredData();
  }
  setLandingFalse() {
    if (this.landSuccess === true || this.landSuccess === null) {
      this.landSuccess = false;
    } else {
      this.landSuccess = null;
    }
    this.getFilteredData();
  }

  setLaunchTrue() {
    if (this.launchSuccess === false || this.launchSuccess === null) {
      this.launchSuccess = true;
    } else {
      this.launchSuccess = null;
    }
    this.getFilteredData();
  }
  setLaunchFalse() {
    if (this.launchSuccess === true || this.launchSuccess === null) {
      this.launchSuccess = false;
    } else {
      this.launchSuccess = null;
    }
    this.getFilteredData();
  }
  setLaunchYear(year) {
    if (this.launchYear === year) {
      this.launchYear = '';
    } else {
      this.launchYear = year;
    }
    this.getFilteredData();
  }
}
