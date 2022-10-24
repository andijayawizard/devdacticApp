import { BlogService } from './../services/blog.service';
import { ServiceService } from './../services/service.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  apiUrl: string = environment.apiUrl;
  title = 'Layanan Kami';
  li: any;
  list: any[];
  constructor(
    private service: ServiceService,
    private blogService: BlogService
  ) {}
  index(): void {
    this.blogService.getAllBlog().subscribe(
      (res) => {
        this.li = res;
        this.list = this.li.records;
        console.log('http response: ', res);
      },
      (err) => {
        console.log('http error: ', err);
      },
      () => {
        console.log('http request completed');
      }
    );
  }
}
