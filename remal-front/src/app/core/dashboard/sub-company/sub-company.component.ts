import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-company',
  templateUrl: './sub-company.component.html',
  styleUrls: ['./sub-company.component.css']
})
export class SubCompanyComponent implements OnInit {
  companyName:string;
  companyBranch:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['name'] ){
       this.companyName=params['name'] ;
      }
      if (params['branch'] ){
        this.companyBranch=params['branch'] ;
       }
    });
  }

}
