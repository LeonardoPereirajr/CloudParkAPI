import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() customer:any;
  id:string;
  name:string;
  card_id:string;


  PlanList:any=[];

  ngOnInit(): void {
    this.loadPlanList();
  }

  loadPlanList(){
    this.service.getPlans().subscribe((data:any)=>{
      this.PlanList=data;

      this.id=this.customer.id;
      this.name=this.customer.name;
      this.card_id=this.customer.card_id;
    });
  }

  addCustomer(){
    var val = {id:this.id,
                name:this.name,
            card_id:this.card_id};

    this.service.addCustomer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCustomer(){
    var val = {id:this.id,
      name:this.name,
      card_id:this.card_id,
  };

    this.service.updateCustomer(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}

