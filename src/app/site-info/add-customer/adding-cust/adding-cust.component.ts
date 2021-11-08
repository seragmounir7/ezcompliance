import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adding-cust',
  templateUrl: './adding-cust.component.html',
  styleUrls: ['./adding-cust.component.scss']
})
export class AddingCustComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddingCustComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

}
