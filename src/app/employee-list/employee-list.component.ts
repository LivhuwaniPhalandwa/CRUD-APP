import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{ 
  title="Employee-Info";

employees= [
  {name: "Livhuwani" , position: "Software developer" , gender: "Female",EmployeeNo:23451},
  {name: "Kholofelo", position: "Tester" ,  gender: "Female",EmployeeNo:86432},
  {name: "Mpho" , position: "Business Analyst" ,  gender: "Male",EmployeeNo:43216},

];
mode1:any={};
mode12:any={};
msg:any="";
addEmployee(){
  this.employees.push(this.mode1)
  this.mode1={};
  this.msg="Record is sucessfully added"
}
deleteEmployee(i: number){
  this.employees.splice(i,1)
  console.log(1);
  this.msg="Record is sucessfully deleted"

}
myValue: string | number;
editEmployee(k: string | number){
  this.mode12.name=this.employees[k].name;
  this.mode12.position=this.employees[k].position;
  this.mode12.gender=this.employees[k].gender;
  this.mode12.EmployeeNo=this.employees[k].EmployeeNo;
  this.myValue=k;
}
updateEmployee(){
  let k=this.myValue;
  for (let i=0; i<this.employees.length;i++){
  if(i==k){
    this.employees[i]=this.mode12;
    this.mode12={}
    this.msg="Record is sucessfully updated"
  }
  }
}
clickMe(){
  this.msg="";
}
}