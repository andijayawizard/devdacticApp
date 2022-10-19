import { PeoplePageModule } from './../pages/people/people.module';
import { PeoplePage } from './../pages/people/people.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor() {}
  ngOnInit() {
    return PeoplePageModule;
  }
}
