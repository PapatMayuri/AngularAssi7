import { Component } from '@angular/core';
import { NgForm , FormGroup, FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  hide=true;
  nForm:FormGroup;
    
    post:any;
  name:string= '';
  password :string= '';
  
  constructor(private fb : FormBuilder)
  {
    this.nForm = fb.group(
        {
      'name' : [null,Validators.required],
      'description' : [null,Validators.compose([Validators.required,Validators.maxLength(20)])],
      'validate': ''
        }
    )
  }
  addPost(post)
  {
    this.password = post.description;
    this.name = post.name;
  }
  display(){
    console.log(this.name);
    console.log(this.password);
  }
  
  
}
