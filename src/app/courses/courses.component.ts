import { Component, OnInit } from '@angular/core';
import { CourseWishlistService } from '../course-wishlist.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  p: number = 1;
public mycourses:Record<string,string|boolean>[]=[];
public newcourses = [
  {id : "1" ,name : "Responsive design course XYZ"},
  {id : "2" ,name : "Responsive design course XYZ"},
  {id : "3" ,name : "Responsive design course XYZ"},
  {id : "4" ,name : "Responsive design course XYZ"},
  {id : "5" ,name : "Responsive design course XYZ"},
  {id : "6" ,name : "Responsive design course XYZ"},
  {id : "7" ,name : "Responsive design course XYZ"},
  {id : "8" ,name : "Responsive design course XYZ"},
  {id : "9" ,name : "Responsive design course XYZ"},
  {id : "10" ,name : "Responsive design course XYZ"},
  {id : "11" ,name : "Responsive design course XYZ"},
  {id : "12" ,name : "Responsive design course XYZ"},
  {id : "13" ,name : "Responsive design course XYZ"},
  {id : "14" ,name : "Responsive design course XYZ"},
  {id : "15" ,name : "Responsive design course XYZ"}
]
total = this.mycourses.length;
collection: any[] = this.mycourses;
  constructor(private cw : CourseWishlistService) { }

  ngOnInit(): void {
    this.mycourses = this.cw.getCourses();
  }

  public onclick(x : string | boolean){
     this.cw.addtocart(x);
  }

  public checksize(){
    return this.cw.getcart().length != 0;
  }

}

export interface coursedata{
  id : string;
  name : string;
  wish : boolean;
}
