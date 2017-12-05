import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {

  constructor() { }
 defaultRange = 1000;

  ngOnInit() {
    console.log('ng', this.defaultRange);

  }
  getSliderRange(event: any) {
    console.log(event);
  }

}
