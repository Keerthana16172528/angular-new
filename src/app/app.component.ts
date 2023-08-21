import { Component } from '@angular/core';
import { ProductlistService } from './productlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign1';
  showList=false;
  constructor(public product:ProductlistService)
  {}

  toggleList() {
    
      this.showList = !this.showList; // Toggle the value
    }
  }
  

