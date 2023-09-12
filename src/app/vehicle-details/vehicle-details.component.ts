import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  public vehicle:any={};
  public id:number=0;

  constructor(private _activatedRoute:ActivatedRoute, private _vehiclesService:VehiclesService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        _vehiclesService.getVehicle(this.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }

}
