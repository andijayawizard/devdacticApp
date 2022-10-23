import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  details: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.index();
  }
  index(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.productService
      .details(id)
      .pipe()
      .subscribe(
        (res) => {
          this.details = res;
          this.details.ktrg = this.decodeHtmlEntities(this.details.ktrg);
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
  decodeHtmlEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
  public getHtml(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
