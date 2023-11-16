import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';
import{SharedService} from './shared.service';
import { PlanComponent } from './plan/plan.component';
import { ShowPlanComponent } from './plan/show-plan/show-plan.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { AddEditPlanComponent } from './plan/add-edit-plan/add-edit-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ShowCustomerComponent,
    AddEditCustomerComponent,
    PlanComponent,
    ShowPlanComponent,
    AddEditPlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
