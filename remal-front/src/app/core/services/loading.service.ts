import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  @BlockUI() blockUI: NgBlockUI;
  constructor() { }

  startLoading() {
    this.blockUI.start('Loading...');
  }

  stopLoading() {
    this.blockUI.stop();
  }

}
