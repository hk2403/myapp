import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl("",[Validators.required, Validators.minLength(3)]),
    manufacturer: new FormControl("",[Validators.required, Validators.minLength(3)]),
    model: new FormControl("",[Validators.required, Validators.minLength(3)]),
    addDetails: new FormGroup({
      type: new FormControl("",[Validators.required]),
      fuel: new FormControl(),
      color: new FormControl()
    }),
    type: new FormControl("",[Validators.required, Validators.minLength(3)]),
    ice:new FormControl(),
    hybrid:new FormControl(),
    cards: new FormArray([])

  });
  constructor(private _vehiclesService: VehiclesService) { }
  get cardsFormArray(){
    return this.vehicleForm.get('cards') as FormArray;
  }
  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        exp: new FormControl(),
        cvv:new FormControl("",[Validators.required, Validators.min(100), Validators.max(999)])
      })
    )
  }
  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }
  
  submit() {
    console.log(this.vehicleForm);

    this._vehiclesService.createVehicle(this.vehicleForm.value).subscribe(
      (data: any) => {
        alert("Vehicle Created Successfully");
      },
      (err: any) => {
        alert("Vehicle Creation Failed");
      }

    )
  }
}
