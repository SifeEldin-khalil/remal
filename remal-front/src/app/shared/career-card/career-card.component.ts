import { Component, Input, OnInit } from '@angular/core';
import { Career } from 'src/app/features/models/career.model';

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.component.html',
  styleUrls: ['./career-card.component.css']
})
export class CareerCardComponent implements OnInit {
  @Input() availableJob:Career;
  constructor() { }

  ngOnInit(): void {
  }

  onClickCard(){
    alert('Are you sure you want to apply for this job');
    window.location.href = this.availableJob.link;
  }

}
