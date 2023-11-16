import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { PlanComponent } from './plan/plan.component';


const routes: Routes = [
{path:'customer',component:CustomerComponent},
{path:'plan',component:PlanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
