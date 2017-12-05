import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fab-action',
  templateUrl: 'fab-action.component.html',
  styles: []
})

export class FabActionComponent implements OnInit {

  @Input() fabAction;
  @Input() sliderRange;

  constructor(private _router: Router) { }

  ngOnInit() { }

  onClickFab(action: string) {
    switch (action) {
      case 'arrow_forward': this.onClickForward(this.sliderRange);
        break;
      case 'search': this.onClickSearch();
        break;
      case 'add': this.onClickAdd();
        break;
    }
  }

  onClickForward(range: number) {
    console.log('Slider Range: ', range);
    this._router.navigate(['/list']);
  }

  onClickSearch() {
    console.log('ToDo: ACTION_ON_CLICK_SEARCH');
  }

  onClickAdd() {
    console.log('ToDo: ACTION_ON_CLICK_ADD');
  }

}