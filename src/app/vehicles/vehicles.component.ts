import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehicles: any =[];

  public term:string="";

  public column:string="";
  public order:string="";
  public limit:number=0;
  public page:number=0;
  
  constructor(private _vehiclesService:VehiclesService){

    _vehiclesService.getVehicles().subscribe(
      (data:any) => {
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getFilteredVehicles(){
    this._vehiclesService.getFilteredVehicles(this.term).subscribe(
      (data:any) => {
        this.vehicles=data;
        
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getSortedVehicles(){
    this._vehiclesService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any) => {
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  deleteVehicle(id:any){
    this._vehiclesService.deleteVehicle(id).subscribe(
      (data:any) => {
        alert("Deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getPagedVehicles(){
    this._vehiclesService.getPagedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }


}
