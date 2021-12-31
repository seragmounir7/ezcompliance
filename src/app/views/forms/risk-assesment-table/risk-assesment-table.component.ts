import { environment } from './../../../../environments/environment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';


@Component({
  selector: 'app-risk-assesment-table',
  templateUrl: './risk-assesment-table.component.html',
  styleUrls: ['./risk-assesment-table.component.scss']
})
export class RiskAssesmentTableComponent implements OnInit {
  displayedColumns: string[] = ['position','Name',"Phone","Email","Site",'Action'];
  showDatas: any;
  tempArray: MatTableDataSource <any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private logicalFormInfo: LogicalFormInfoService,public router: Router) { }

  ngOnInit(): void {
    this.getToolBox();
  }
  ngAfterViewInit() {
    // this.tempArray.paginator = this.paginator;
    // this.tempArray.sort = this.sort; 
  }
  delete(id)
  {
    this.logicalFormInfo.deleteAssessment(id).subscribe((res)=>{
      console.log("deleted",res);
      this.getToolBox();
    })
  }
  printPage(id)
  {
    console.log("check");
    // this.logicalFormInfo.printing.next('print');
    localStorage.setItem("key","print");
    // $("<iframe>")                             // create a new iframe element
    //     .hide()                               // make it invisible
    //     .attr("src", environment.stagingUrl+"#/admin/forms/riskAssessSWMS/"+id) // point the iframe to the page you want to print
    //     .appendTo("body");                    // add iframe to the DOM to cause it to load the page

    this.router.navigate(['/',{ outlets: {'print': ['print','riskAssessSWMS', id]}}])

    // let iframe=document.createElement("iframe")
    //       iframe.src= environment.stagingUrl+"#/admin/forms/riskAssessSWMS/"+id
    //       let body = document.getElementsByTagName("body")
    //       body[0].appendChild(iframe)
  }
  getToolBox()
  {
    this.logicalFormInfo.getAllassessmet().subscribe((res:any)=>
    {
      this.showDatas= res.data;
      this.showDatas.forEach((element,i) => {
        return this.showDatas[i].index= i
      });
  
      this.tempArray = new MatTableDataSource<any>(this.showDatas);
      this.tempArray.paginator = this.paginator;
      this.tempArray.sort = this.sort; 
      console.log("get res",this.showDatas);
    })
  }
  edit(id)
  {
    localStorage.setItem('key',' ');
    this.router.navigate(["/admin/forms/riskAssessSWMS/"+id]);
  }
}
