import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {CDetail,ComputerModel} from '../models/computerModel';
import { headersToString } from 'selenium-webdriver/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http:HttpClient) { }

  firstClick()
  {
    return console.log("clicked");
  }

  getUsers(){

    return this.http.get('https://reqres.in/api/users')
  }

  getComputerDetail():Observable<ComputerModel>{

    return this.http.get<ComputerModel>('/api/values');
  }

  postComputerLoan(CDetail):Observable<{}>{
    return this.http.post("/api/values/create",CDetail,{
    headers:new HttpHeaders({'content-type':'application/json'}),
    responseType:'text'
  });
}
  
}
