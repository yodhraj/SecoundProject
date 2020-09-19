import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecoundProject';
arr1 = ["a","b"]
  clickEvent(){

    this.arr1.push("c");

  }



}
