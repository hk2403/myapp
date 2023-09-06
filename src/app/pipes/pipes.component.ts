import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name:string="nani";
  public city:string="HYDERABAD";
  public user:any={name:'abc',age:27};
  public today:any= new Date();

}
