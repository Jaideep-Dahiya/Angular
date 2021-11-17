import { EventEmitter, Injectable } from '@angular/core';
import { coursedata } from './courses/courses.component';

@Injectable({
  providedIn: 'root'
})
export class CourseWishlistService {
  ans:Record<string,string|boolean>[] = [];
  inthecart:Record<string,string|boolean>[] = [];
  $newadded = new EventEmitter();
  constructor() { }
  public mycourses = [
    {id : "1" ,name : "Responsive design course XYZ", wish : true},
    {id : "2" ,name : "Responsive design course XYZ", wish : true},
    {id : "3" ,name : "Responsive design course XYZ", wish : false},
    {id : "4" ,name : "Responsive design course XYZ",wish : false},
    {id : "5" ,name : "Responsive design course XYZ",wish : false},
    {id : "6" ,name : "Responsive design course XYZ",wish : false},
    {id : "7" ,name : "Responsive design course XYZ",wish : false},
    {id : "8" ,name : "Responsive design course XYZ",wish : false},
    {id : "9" ,name : "Responsive design course XYZ",wish : false},
    {id : "10" ,name : "Responsive design course XYZ",wish : false},
    {id : "11" ,name : "Responsive design course XYZ",wish : false},
    {id : "12" ,name : "Responsive design course XYZ",wish : false},
    {id : "13" ,name : "Responsive design course XYZ",wish : false},
    {id : "14" ,name : "Responsive design course XYZ",wish : false},
    {id : "15" ,name : "Responsive design course XYZ",wish : false}
  ]
  tothecart:coursedata = {
    id : "",
    name : "",
    wish : true
  };

  contains:string[] = []
  public getWishes(){
    this.ans = [];
    for(var x of this.mycourses){
      if(x.wish == true)
        this.ans.push(x);
    }
    return this.ans;
  }

  public getCourses(){
    return this.mycourses;
  }

  cartarray:coursedata[] = [];

  public addtocart(curr : string | boolean){
      let temp:coursedata = {
        id : "",
        name : "",
        wish : true}
      let added:boolean = false;
      for(var x of this.mycourses){
        if(x.id == curr){
          temp = x;
        }
      }
      for(var x of this.cartarray){
        if(x.id == curr){
          added = true;
          break;
        }
      }
      // console.log(this.cartarray);
      if(added!=true){
        this.cartarray.push(temp);
      }
      this.$newadded.emit();

      // this.$newadded.emit(this.inthecart);
  }
  public getcart(){
    return this.cartarray;
  }

  public deletefromcart(x:string){
    for(var num = 0;num<this.cartarray.length;num++){
        if(this.cartarray[num].id == x){
          let temp:coursedata[] = this.cartarray.slice(0,num);
          let temp2:coursedata[] = this.cartarray.slice(num+1);
          let final:coursedata[] = temp.concat(temp2);
          this.cartarray = final;
          console.log(this.cartarray);
        }
      }
      this.$newadded.emit();
  }
}
