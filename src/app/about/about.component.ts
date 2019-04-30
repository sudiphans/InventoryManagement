import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { DataService } from '../data.service';
import {CDetail} from '../../models/computerModel';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private newComputer : CDetail = new CDetail();

  constructor(private data:DataService) { }

  computerModel = new FormGroup({
          Id:new FormControl(''),
          Lb_no:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),
          Validators.maxLength(6)]),                                                    
          sl_no:new FormControl(''),
          make:new FormControl(''),
          CLoan:new FormGroup({
              Id: new FormControl(''),
              serNo:new FormControl('')

          })
  });



  showMsg:boolean= null;
  showError :boolean = null;
  
  onSubmit(){

    
    if(this.computerModel.valid)
    {
    
      this.newComputer = this.computerModel.value;
    
     // console.warn(this.newComputer);

      this.data.postComputerLoan(this.newComputer).subscribe(
        (data)=>{
          console.log(data);
          this.showMsg = true;
          this.showError=false;
          this.computerModel.reset();
        },
        (error:any)=>
        {
          //console.log(error),
          this.showMsg = false;
          error = error;
          this.showError = true;
        }
      );
        
      }    
}
 

  ngOnInit() {
    
  }

}

