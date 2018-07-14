import { Component } from '@angular/core';

export interface books {
  bname: string;
  name: string;
  position: number;
  no: number;
  price: number;
}

const Books_Data: books[] = [
  {position: 1, bname: 'Programming in c', name: 'Ajay mittal', no: 737, price: 600 },
  {position: 2, bname: 'Thinking in C++', name: 'Bruce Eckel', no: 783, price: 849},
  {position: 3, bname: 'Core Java', name: 'Dr. R. Nageswara Rao', no: 683, price:544 },
  {position: 4, bname: 'ng-book', name: 'Ari Lerner', no: 660, price:4000 },
  {position: 5, bname: 'Angular 5', name: 'Asim Hussain', no: 450, price:200 }
];




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  displayedColumns: string[] = ['position', 'bname', 'name', 'no', 'price'];
  dataSource = Books_Data;

}
