import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  model = new User('JD','jaideep','dahiya','add something here!!',false,true,false,false,'student','0-5','java');
  temp:User = this.model;
  ngOnInit(): void {
  }

}
