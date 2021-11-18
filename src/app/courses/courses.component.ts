import { Component, OnInit } from '@angular/core';
import { CourseWishlistService } from '../course-wishlist.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  p: number = 1;
public mycourses:any=[];
nulla = 536;
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
cartprice:number = 0;

  ngOnInit(): void {
    this.mycourses = this.cw.getCourses();
    this.cw.$newadded.subscribe((data) => {
      this.cartarray = this.cw.getcart();
    })
  }
  cartarray:coursedata[]=[];
  public onclick(x : string| number| boolean){
     this.cw.addtocart(x);
  }

  public checksize(){
    return this.cw.getcart().length != 0;
  }

  public changewish(x : string| number| boolean){
    console.log(x);
    this.cw.togglewish(x);
 }

 discountval(x : number, y:number){
      return x - (y*0.01*x);
 }
 public checkprice(){
    let total:number = 0;
    this.cartarray = this.cw.getcart();
    for(var num=0;num<this.cartarray.length;num++){
        if(this.cartarray[num].discount == true){
           total+=this.cartarray[num].price - (0.01*this.cartarray[num].disc_amt*this.cartarray[num].price);
        }else{
          total+=this.cartarray[num].price;
        }
    }
    return total;

 }

}

export interface coursedata{
  id : string;
  name : string;
  wish : boolean;
  price : number;
  author : string;
  discount : boolean;
  disc_amt : number;
}
