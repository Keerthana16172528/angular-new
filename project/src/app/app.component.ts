import { Component } from '@angular/core';
import{Router} from '@angular/router';
import{NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  log:boolean=false;
  db:boolean=false;

  constructor(private router : Router)
  {}
 loginbutton()
 {
  this.log=true;
  this.db=false;
  this.router.navigate(['Login']);
 }
 dashboardbutton()
 {
  this.log=true;
  this.db=false;
  this.router.navigate(['dashboard']);
 }

  
}


