import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.component.html',
  styleUrls: ['./career-card.component.css']
})
export class CareerCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickCard(){
    alert('Are you sure you want to apply for this job')
  }

}
