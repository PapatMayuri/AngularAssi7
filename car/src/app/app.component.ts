import { Component } from '@angular/core';
import {  FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  cars : string [] =  ['Suzuki Ciaz','Datson GO+','Land Rover','Mercedes','Audi A3'];

  colors : string [] =  ['Blue','Gray','Yellow','Black','Maroon'];

  seats : string [] =  ['two','four','eight','five','nine'];

  nForm:FormGroup;
  name: String;
  type: string;
  color : string;
  seat : String;
  cno : any;
  post: any;
 

  constructor(private fb : FormBuilder)
  {
    this.nForm = fb.group(
     {
      'name' : [null],
      'ctype' : [null],
      'ccolor' : [null],
      'cno' : [null,Validators.required],
      'cseat' : [null],
      'validate': ''
        }
    )
  }
 
  addPost(post)
  {
    this.name=post.fname;
     this.type=post.ctype; 
    this.color=post.ccolor;
    this.seat=post.cseat;
    this.cno=post.cno;
  }
  display(){
    console.log(this.name);
    console.log(this.type);
   console.log(this.color);
    console.log(this.seat);
    console.log(this.cno);
  }

}
