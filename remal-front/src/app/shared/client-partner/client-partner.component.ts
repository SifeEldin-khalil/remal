import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-partner',
  templateUrl: './client-partner.component.html',
  styleUrls: ['./client-partner.component.css']
})
export class ClientPartnerComponent implements OnInit {
  
  @Input() logoList:string[];
  constructor() { }

  ngOnInit(): void {
  }

}
