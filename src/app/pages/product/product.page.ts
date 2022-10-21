import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  title = 'Product';
  apiUrlTomat: string = environment.apiUrlTomat;
  li: any;
  list: any[];
  currentPage = 1;
  constructor(
    private productService: ProductService,
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
    this.productService
      .read()
      .pipe()
      .subscribe(
        (res) => {
          loading.dismiss();
          this.li = res;
          this.list = this.li.records;
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
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.index(event);
  }
}
