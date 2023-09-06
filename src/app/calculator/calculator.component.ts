import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  public n1:number=0;
  public n2:number=0;
  public result:number=0;

  sum(){
    this.result= this.n1 + this.n2;
    this.result = parseFloat(this.result.toFixed(2));
  }
  mul(){
    this.result = this.n1 * this.n2;
    this.result = parseFloat(this.result.toFixed(2));
    
  }


}
