import { Component, OnInit, ViewChild } from '@angular/core';
import {DataService} from '../data.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

displayedColumns: string[] = ['name','sex','age'];

dataSource = new MatTableDataSource<UserElement>(ELEMENT_DATA);

@ViewChild(MatPaginator) paginator : MatPaginator;

  constructor() { }

  ngOnInit() {

   //this.dataSource.paginator = this.paginator;
  }


  //ensure paginationa and huge data source binding are done
  //afterviewinit function
  ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
  }
 
//writing the interface design



}

export interface UserElement {
  name:string;
  sex:string;
  age:number;
  
  }
  
  const ELEMENT_DATA : UserElement[]  = [
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sudip",sex:"male",age:35},
{name:"sonu",sex:"male",age:35},
{name:"sandeep",sex:"male",age:35},
{name:"sud",sex:"male",age:35},
  ]