import { Component } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  decodeToken : any
  constructor() {
    this.decodeToken = jwtDecode(localStorage.getItem("token")!)
  }


}
