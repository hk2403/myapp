import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { DiceComponent } from './dice/dice.component';
import { BankComponent } from './bank/bank.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BooksComponent } from './books/books.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes', component:PipesComponent},
    {path:'grade',component:GradeComponent},
    {path:'dice', component:DiceComponent},
    {path:'bank', component:BankComponent},
    {path:'createBank', component:CreateBankComponent},
    {path:'vehicles', component:VehiclesComponent},
    {path:'createVehicle',component:CreateVehicleComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'test',component:TestComponent},
  {path:'books', component:BooksComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
