import { Component, OnInit } from '@angular/core';
import { Career } from '../../models/career.model';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  availablesJobs:Career[];
  constructor() { 
    this.availablesJobs=[];

    var availableJob:Career = {title:"HR Head",
    requirements:["Supporting text below",
    "Supporting text below as a natural",
    "With supporting text below as a natural lead-in to additional content Supporting text below as a natural lead-in to additional content"],
    company:"Remal Projects",location:"Egypt, Cairo",deadline:new Date(),
    link:"https://www.linkedin.com/"}

    this.availablesJobs.push(availableJob);
    this.availablesJobs.push(availableJob);
    this.availablesJobs.push(availableJob);
    this.availablesJobs.push(availableJob);
    this.availablesJobs.push(availableJob);

  }

  ngOnInit(): void {
  }

}
