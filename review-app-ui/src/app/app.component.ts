import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Teams } from './teams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  teams : any ;
  constructor(private service: AppService){

  }

  ngOnInit(): void {
    this.service.getData().subscribe((res)=>{
this.teams = res;
    })

  }
  title = 'review-app-ui';
  
}
