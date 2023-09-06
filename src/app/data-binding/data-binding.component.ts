import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age:number = 21;
  public name:string = "nani";
  public isIndian:boolean = true;

  public phone:string ="+91 ";

  submit(){
    alert('submit clicked');
  }

  cancel(){
    alert('cancel double clicked');
  }

  typed(){
    alert('Typed something');
  }

}
