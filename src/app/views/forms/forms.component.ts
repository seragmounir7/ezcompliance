import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  closeResult: string;
  page = 1;
  pageSize = 10;
  collectionSize = 10;
  ELEMENT_DATA = [
    { index: 1, title: 'Hazards Reported', link: ['/admin/forms/hazardRep'] },
    { index: 2, title: 'Notifiable Incidents', link: ['/admin/forms/incidentRep'] },
    { index: 3, title: 'Toolbox Talk', link: ['/admin/forms/toolboxTalk'] },
    { index: 4, title: 'Site Inspection', link: ['/admin/forms/siteInspect'] },
    { index: 5, title: 'Risk Assessment', link: ['/admin/forms/riskAssessSWMS'] }
  ];
  formName = '';
  addForm: FormGroup;
  // formName =[] ;
  displayedColumns: string[] = ['index', 'formName', 'formFrequency', 'Disable/Enable', 'edit'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
    private setTitle: SetTitleService
  ) { }


  ngOnInit(): void {

    this.setTitle.setTitle('WHS-All Form');

  }










}
