import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-plan',
  templateUrl: './add-edit-plan.component.html',
  styleUrls: ['./add-edit-plan.component.css']
})
export class AddEditPlanComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() plan:any;
  PlanId:string;
  PlanName:string;

  ngOnInit(): void {
    this.PlanId=this.plan.PlanId;
    this.PlanName=this.plan.PlanName;
  }

  addPlan(){
    var val = {PlanId:this.PlanId,
                PlanName:this.PlanName};
    this.service.addPlan(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePlan(){
    var val = {PlanId:this.PlanId,
      PlanName:this.PlanName};
    this.service.updatePlan(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
