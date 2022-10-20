import { LoadingController } from '@ionic/angular';
import { PeopleService } from './../services/people.service';
import { PeoplePageModule } from './../pages/people/people.module';
import { PeoplePage } from './../pages/people/people.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor() {}
  ngOnInit() {}
}
