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
      {title:"Public Address Systems",path:"assets/img/solutions/address-system.png"},
      {title:"CCTV Systems",path:"assets/img/solutions/cctv.png"},
      {title:"Central Battery",path:"assets/img/solutions/battery.png"},
      {title:"Access Control Systems",path:"assets/img/solutions/control-system.png"},
      {title:"Fire Alarm & Fire Fighting",path:"assets/img/solutions/fire-alarm.png"},
      {title:"Lighting Systems",path:"assets/img/solutions/lighting-system.png"},
      {title:"MEP",path:"assets/img/solutions/mep.png"},
      {title:"Car Parking Systems",path:"assets/img/solutions/parking-system.png"},
      {title:"Physical Security Information Management Systems",path:"assets/img/solutions/psim.png"},
      {title:"Physical Security Systems",path:"assets/img/solutions/security-system.png"},

    ];
   }

  ngOnInit(): void {
  }

}
