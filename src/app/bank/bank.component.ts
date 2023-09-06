import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {

  public accounts:any=[];

  public limit:number=0;
  public page:number=0;
  public term:any=[];
  public column:any=[];
  public order:any=[];
  
  constructor(private _bankService:BankService){
   _bankService.getAccounts().subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert("Internal Server Error");
    }
   )

  }
  getFilteredAccounts(){
    this._bankService.getFilteredAccounts(this.term).subscribe(
      (data:any) => {
        this.accounts=data;
        
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getSortedAccounts(){
    this._bankService.getSortedAccounts(this.column, this.order).subscribe(
      (data:any) => {
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getPagedAccounts(){
    this._bankService.getPagedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }

}
