import { LoadingController } from '@ionic/angular';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  li: any;
  list: any[];
  constructor(
    private peopleService: PeopleService,
    private loadCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.index();
  }
  async index() {
    await this.loadCtrl.create();
    await this.peopleService.getAll().subscribe(
      (res) => {
        if (res) {
          this.loadCtrl.dismiss();
          this.li = res;
          this.list = this.li.records;
          console.log(res);
        } else {
          this.loadCtrl.dismiss();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
