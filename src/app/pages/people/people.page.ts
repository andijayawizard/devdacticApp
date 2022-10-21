import { LoadingController } from '@ionic/angular';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  apiUrl: string = environment.apiUrl;
  li: any;
  list: any[];
  // image: string;
  constructor(
    private peopleService: PeopleService,
    private loadCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.index();
  }
  async index() {
    const loading = await this.loadCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.peopleService
      .getAll()
      .pipe()
      .subscribe(
        (res) => {
          if (res) {
            loading.dismiss();
            this.li = res;
            this.list = this.li.records;
            // this.image = `${this.apiUrl}/assets/uploads/images/people/${this.li.records.acak}-1.jpg`;
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
