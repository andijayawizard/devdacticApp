import { LoadingController } from '@ionic/angular';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.page.html',
  styleUrls: ['./people-detail.page.scss'],
})
export class PeopleDetailPage implements OnInit {
  apiUrl: string = environment.apiUrl;
  details: any;
  image: string;
  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
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
    const id: number = await +this.route.snapshot.paramMap.get('id');
    this.peopleService
      .getDetail(id)
      .pipe()
      .subscribe(
        (res) => {
          loading.dismiss();
          this.details = res;
          this.details.ktrg = this.decodeHtmlEntities(this.details.ktrg);
          this.image = `${this.apiUrl}/assets/uploads/images/people/${this.details.acak}-1.jpg`;
          console.log('http response: ', res);
        },
        (err) => {
          loading.dismiss();
          console.log('http error: ', err);
        },
        () => {
          loading.dismiss();
          console.log('http request completed');
        }
      );
  }
  decodeHtmlEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
  public getHtml(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
