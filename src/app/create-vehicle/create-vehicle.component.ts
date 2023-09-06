import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleForm:FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl()
  });
  constructor(private _vehiclesService:VehiclesService){}
  submit(){
    console.log(this.vehicleForm);

    this._vehiclesService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Vehicle Created Successfully");
      },
      (err:any)=>{
        alert("Vehicle Creation Failed");
      }

    )
  }
}
