import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-plan',
  templateUrl: './show-plan.component.html',
  styleUrls: ['./show-plan.component.css']
})
export class ShowPlanComponent implements OnInit {

  constructor(private service:SharedService) { }

  PlanList:any=[];

  ModalTitle:string;
  ActivateAddEditPlanComp:boolean=false;
  plan:any;

  PlanIdFilter:string="";
  PlanNameFilter:string="";
  PlanListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshPlanList();
  }

  addClick(){
    this.plan={
      PlanId:0,
      PlanDescription:"",
      PlanValue:0
    }
    this.ModalTitle="Add Plan";
    this.ActivateAddEditPlanComp=true;

  }

  editClick(item){
    this.plan=item;
    this.ModalTitle="Edit Plan";
    this.ActivateAddEditPlanComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deletePlan(item.PlanId).subscribe(data=>{
        alert(data.toString());
        this.refreshPlanList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPlanComp=false;
    this.refreshPlanList();
  }


  refreshPlanList(){
    this.service.getPlans().subscribe(data=>{
      this.PlanList=data;
      this.PlanListWithoutFilter=data;
    });
  }

  FilterFn(){
    var PlanIdFilter = this.PlanIdFilter;
    var PlanNameFilter = this.PlanNameFilter;

    this.PlanList = this.PlanListWithoutFilter.filter(function (el){
        return el.PlanId.toString().toLowerCase().includes(
          PlanIdFilter.toString().trim().toLowerCase()
        )&&
        el.PlanName.toString().toLowerCase().includes(
          PlanNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.PlanList = this.PlanListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
