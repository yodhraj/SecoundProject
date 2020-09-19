import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
id=10;
Name = "Yodhraj";
Inpudata ="";
MathValue = Math.random();
 


fiestMethod(){

  return this.Name;
}

GetInputData( event: any)
{
this.Inpudata = event.target.value;
 
}
getStyle(){

return "red"

}



}
