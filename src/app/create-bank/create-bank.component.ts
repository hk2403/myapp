import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {
  public bankForm: FormGroup= new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl()
  });
  constructor(private _bankService:BankService){}
  submit(){
    console.log(this.bankForm);
    this._bankService.createAccount(this.bankForm.value).subscribe(
      (data:any)=>{
        alert("New Account Created");
      },
      (err:any)=>{
        alert("Account Creation Failed");
      }
    )
  }
}
