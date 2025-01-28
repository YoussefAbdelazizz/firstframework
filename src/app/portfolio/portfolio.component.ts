import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 ishidden:boolean=true;
 modelImg:string="";
 hideModel(clickTarget:EventTarget|null ,elRef:HTMLImageElement):void{
 if (clickTarget==elRef) {
  return;
 }else{
  this.ishidden=true;
 }
 }


}
