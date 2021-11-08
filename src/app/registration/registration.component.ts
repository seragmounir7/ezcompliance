import { Component, OnInit } from '@angular/core';
import { SetTitleService } from '../utils/services/set-title.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private setTitle: SetTitleService) { }

  ngOnInit(): void {
    this.setTitle.setTitle('WHS-Registration');
  }

}
