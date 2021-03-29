import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  solutionList:Item[];
  constructor() {
    this.solutionList=[
      {title:"Public Address Systems",pathImage:"assets/img/solutions/address-system.png"},
      {title:"CCTV Systems",pathImage:"assets/img/solutions/cctv.png"},
      {title:"Central Battery",pathImage:"assets/img/solutions/battery.png"},
      {title:"Access Control Systems",pathImage:"assets/img/solutions/control-system.png"},
      {title:"Fire Alarm & Fire Fighting",pathImage:"assets/img/solutions/fire-alarm.png"},
      {title:"Lighting Systems",pathImage:"assets/img/solutions/lighting-system.png"},
      {title:"MEP",pathImage:"assets/img/solutions/mep.png"},
      {title:"Car Parking Systems",pathImage:"assets/img/solutions/parking-system.png"},
      {title:"Physical Security Information Management Systems",pathImage:"assets/img/solutions/psim.png"},
      {title:"Physical Security Systems",pathImage:"assets/img/solutions/security-system.png"},

    ];
   }

  ngOnInit(): void {
  }

}
