import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  apiUrl: string = environment.apiUrl;
  title = 'Layanan Kami';
  li: any;
  list: any[];
  currentPage = 1;
  constructor(
    private service: ServiceService,
    private loadCtrl: LoadingController
  ) {}

  ngOnInit(): void {
    this.index();
  }
  async index(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.service.getAllServices().subscribe(
      (res) => {
        this.li = res;
        this.list = this.li.records;
        loading.dismiss();
        console.log('http response: ', res);
      },
      (err) => {
        console.error('http error:', err);
      },
      () => {
        console.log('http request completed');
      }
    );
  }
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.index(event);
  }
}
