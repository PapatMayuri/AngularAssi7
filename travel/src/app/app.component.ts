import { Component } from '@angular/core';
import {  FormGroup, FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  Cities : string [] =  ['London','New York','Boston','Goa','Kerala'];

  nForm:FormGroup;
  name: string= '';
  name2: string='';
  name1 : string='';
  sdate :Date;
  edate :Date;
  post: any;

  constructor(private fb : FormBuilder)
  {
    this.nForm = fb.group(
     {
      'fname' : [null],
      'lname' : [null],
      'cname' : [null],
      'sdate' : [null],
      'edate' : [null],
      'validate': ''
        }
    )
  }
 
  addPost(post)
  {
    this.name2=post.fname;
     this.name1=post.lname;
    this.name=post.cname;
    this.sdate=post.sdate;
    this.edate=post.edate;
  }
  display(){
    console.log(this.name2);
    console.log(this.name1);
   console.log(this.name);
    console.log(this.sdate);
    console.log(this.edate);
  }
}
