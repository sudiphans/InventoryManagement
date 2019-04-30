import { Component, OnInit , ViewChild} from '@angular/core';
import {ComputerModel} from '../../models/computerModel';
import {DataService} from '../data.service';
import {MatTableDataSource,MatPaginator} from '@angular/material';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private dataSource = null;
  
  @ViewChild(MatPaginator) paginator : MatPaginator;

  displayedColumns:string[] = ['logBook','itemMake','serialNo','loanHolder'];



  constructor(private data : DataService) { }

  isLoading = true;
  

  ngOnInit() {
    this.dataSource= new MatTableDataSource([]);

    this.data.getComputerDetail().subscribe(
      (res : ComputerModel)=>{
        this.isLoading = false;
        this.dataSource.data = res;
          },
      (error:any)=>{
        console.log(error),
        this.isLoading = false;
      },
    );

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

}


