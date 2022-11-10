import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/services/general.service';
import { Boxes } from '../boxes';


@Component({
  selector: 'app-portfolio', 
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  
})
export class PortfolioComponent implements OnInit {
  box:Boxes[]=[
    {title:"LOG CABIN",url:"cabin.png"},
    {title:"TASTY CAKE",url:"cake.png"},
    {title:"CIRCUS TENT",url:"circus.png"},
    {title:"CONTROLLER",url:"game.png"},
    {title:"LOCKED SAFE",url:"safe.png"},
    {title:"SUBMARINE",url:"submarine.png"},

  ]

  constructor(public generalService: GeneralService){}


  ngOnInit(): void {
    this.box=this.box

  }
  


  

}
